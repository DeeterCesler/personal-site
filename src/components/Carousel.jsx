import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const DECK_DURATION = 0.45; // seconds for the mobile deal slide

const Carousel = ({ children, containerWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [showNavigation, setShowNavigation] = useState(true);
  // Concurrent deal flights, keyed by card index. Each click advances the top
  // immediately and starts that card on its own flight, so rapid clicks overlap:
  // several cards can be sliding off at once, staggered by how fast you click.
  //   out  -> next: phase 'out' (slide off left, on top) then 'back' (tuck behind)
  //   in   -> prev: slide in from the left onto the top
  const [flights, setFlights] = useState({});
  const topRef = useRef(0);          // authoritative top index (advances per click)
  const orderRef = useRef(0);        // increasing stack order so newer flights sit on top
  const flightTimers = useRef([]);
  const carouselRef = useRef(null);

  useEffect(() => () => flightTimers.current.forEach(clearTimeout), []);
  // Reset the stack-order counter whenever the deck goes idle.
  useEffect(() => {
    if (Object.keys(flights).length === 0) orderRef.current = 0;
  }, [flights]);

  const checkContainerWidth = useCallback(() => {
    if (!containerWidth) return;

    let newCardsPerView = 1;
    let newShowNavigation = false;

    if (containerWidth <= 640) {
      // Mobile: 1 card, always show navigation
      newCardsPerView = 1;
      newShowNavigation = true;
    } else if (containerWidth <= 1024) {
      // Tablet: 3 cards
      newCardsPerView = 3;
      newShowNavigation = true;
    } else {
      // Desktop: 5 cards
      newCardsPerView = 5;
      newShowNavigation = React.Children.count(children) > 5;
    }

    setCardsPerView(newCardsPerView);
    setShowNavigation(newShowNavigation);
  }, [containerWidth, children]);

  // Calculate responsive settings
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    checkContainerWidth();
  }, [containerWidth, children, checkContainerWidth]);

  useEffect(() => {
    window.addEventListener('resize', checkContainerWidth);
    return () => window.removeEventListener('resize', checkContainerWidth);
  }, [checkContainerWidth]);

  const totalCards = React.Children.count(children);

  const DECK_MS = DECK_DURATION * 1000;

  // Remove a finished flight (guarded by order so a stale timer can't clobber a
  // fresh flight that reused the same card index).
  const endFlight = (cardIndex, order) => {
    setFlights(prev => {
      const f = prev[cardIndex];
      if (!f || f.order !== order) return prev;
      const next = { ...prev };
      delete next[cardIndex];
      return next;
    });
  };

  const navigate = (dir) => {
    const n = totalCards;
    const from = topRef.current;
    const to = dir === 'next' ? (from + 1) % n : (from - 1 + n) % n;

    if (cardsPerView !== 1) {
      topRef.current = to;
      setCurrentIndex(to);
      return;
    }

    // Advance the top right away so the next click deals the following card; the
    // card we just left starts its own flight and animates independently.
    topRef.current = to;
    setCurrentIndex(to);

    const order = ++orderRef.current;
    const cardIndex = dir === 'next' ? from : to;
    const kind = dir === 'next' ? 'out' : 'in';
    setFlights(prev => ({ ...prev, [cardIndex]: { kind, phase: kind === 'out' ? 'out' : 'in', order } }));

    if (kind === 'out') {
      // out -> back: after the slide-off, drop z and slide behind the deck.
      const t1 = setTimeout(() => {
        setFlights(prev => {
          const f = prev[cardIndex];
          if (!f || f.order !== order) return prev;
          return { ...prev, [cardIndex]: { ...f, phase: 'back' } };
        });
      }, DECK_MS);
      const t2 = setTimeout(() => endFlight(cardIndex, order), DECK_MS * 2);
      flightTimers.current.push(t1, t2);
    } else {
      const t1 = setTimeout(() => endFlight(cardIndex, order), DECK_MS);
      flightTimers.current.push(t1);
    }
  };

  const goToNext = () => navigate('next');
  const goToPrevious = () => navigate('prev');

  // Calculate card positions and visibility
  const getCardStyle = (index) => {
    const cardWidth = containerWidth <= 640 ? Math.min(300, containerWidth - 40) : 300;
    const gap = 20;
    const totalWidth = cardWidth + gap;
    
    // For tablet view (3 cards), we need to ensure we always show exactly 3 cards
    if (cardsPerView === 3) {
      // Calculate which 3 cards should be visible
      // We want to show currentIndex, currentIndex+1, currentIndex+2
      // But handle wrapping properly
      
      let adjustedIndex = index;
      if (adjustedIndex < currentIndex) {
        adjustedIndex += totalCards;
      }
      
      // Calculate relative position from currentIndex
      let relativeIndex = adjustedIndex - currentIndex;
      
      // Only show the 3 cards we want
      if (relativeIndex >= 0 && relativeIndex < 3) {
        let x;
        if (relativeIndex === 0) {
          x = -totalWidth; // Left card
        } else if (relativeIndex === 1) {
          x = 0; // Center card
        } else if (relativeIndex === 2) {
          x = totalWidth; // Right card
        }
        
        return {
          x,
          opacity: 1,
          scale: 1,
          zIndex: 10
        };
      } else {
        // Hide all other cards
        return {
          x: 0,
          opacity: 0,
          scale: 0.8,
          zIndex: 1
        };
      }
    }

    // Original logic for mobile and desktop
    let relativeIndex = index - currentIndex;
    
    // Handle wrapping for circular effect
    if (relativeIndex > totalCards / 2) {
      relativeIndex -= totalCards;
    } else if (relativeIndex < -totalCards / 2) {
      relativeIndex += totalCards;
    }
    
    let x = relativeIndex * totalWidth;
    let opacity = 1;
    let scale = 1;
    let zIndex = 1;

    // Mobile: a physical card deck. The active card is centered and on top; the
    // rest fans under it to the right. Each click advances the top immediately
    // and sends the dealt card on its own flight, so rapid clicks overlap into a
    // cascade. opacity stays 1 - cards slide, they never fade.
    if (cardsPerView === 1) {
      const peek = 26;                       // px each deck card pokes out
      const maxFan = 3;                       // deck stops fanning past this depth
      const n = totalCards;
      const depth = (((index - currentIndex) % n) + n) % n; // 0 = top/active
      const fan = Math.min(depth, maxFan);
      const offX = cardWidth + 40;            // far enough to clear the screen left

      // Resting position for this card's depth in the deck.
      const restX = depth === 0 ? 0 : fan * peek;
      const restScale = depth === 0 ? 1 : 1 - fan * 0.05;
      const restZ = 15 - depth;               // top is highest, back is lowest

      const flight = flights[index];
      if (flight) {
        if (flight.kind === 'out') {
          if (flight.phase === 'out') {
            // Slide off to the left WITHOUT jumping to the top. Flights are an
            // ordered queue: the first card dealt stays highest and each newer
            // one slots in just underneath (earlier order -> higher z), so a new
            // click never pops its card above the ones already in flight. They're
            // all kept above the resting deck and below the nav arrows.
            return {
              x: -offX, scale: 1, opacity: 1, zIndex: 900 - flight.order,
              transition: { duration: DECK_DURATION, ease: 'easeIn' },
            };
          }
          // Once it's all the way over, drop to the rear and slide back behind.
          return {
            x: restX, scale: restScale, opacity: 1, zIndex: restZ,
            transition: { duration: DECK_DURATION, ease: 'easeOut' },
          };
        }
        // prev: slide in from off-screen-left onto the top (newest on top).
        return {
          x: [-offX, 0], scale: 1, opacity: 1, zIndex: 30 + flight.order,
          transition: { duration: DECK_DURATION, ease: 'easeOut' },
        };
      }

      // Resting deck card.
      return {
        x: restX, scale: restScale, opacity: 1, zIndex: restZ,
        transition: { duration: DECK_DURATION, ease: 'easeOut' },
      };
    } else {
      // Desktop: show multiple cards
      if (relativeIndex >= 0 && relativeIndex < cardsPerView) {
        // For 5 cards, use the original calculation
        x = relativeIndex * totalWidth - (cardsPerView - 1) * totalWidth / 2;
        opacity = 1;
        scale = 1;
        zIndex = 10;
      } else {
        opacity = 0;
        scale = 0.8;
        zIndex = 1;
      }
    }

    return {
      x,
      opacity,
      scale,
      zIndex
    };
  };

  if (!showNavigation) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-5 p-4">
        {React.Children.map(children, child =>
          React.isValidElement(child) ? child : null
        )}
      </div>
    );
  } else return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative flex items-center justify-center"
        style={{
          height: '450px',
          width: '100%',
          maxWidth: cardsPerView === 3 ? '960px' : '100%', // Limit width for 3 cards to prevent gaps
          transform: cardsPerView === 3 ? 'translateX(40px)' : 'none', // Move tablet layout slightly right
          minWidth: cardsPerView === 1 ? '100%' : 'auto' // Ensure full width on mobile
        }}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null;
          const cardStyle = getCardStyle(index);
          const mobileWidth = containerWidth <= 640 ? Math.min(300, containerWidth - 40) : '300px';
          return (
            <motion.div
              key={child.key ?? index}
              className="absolute"
              initial={false}
              animate={{
                x: cardStyle.x,
                opacity: cardStyle.opacity,
                scale: cardStyle.scale,
                zIndex: cardStyle.zIndex
              }}
              transition={cardStyle.transition || { duration: 0.5, ease: "easeInOut" }}
              style={{ width: mobileWidth, height: '400px' }}
            >
              {React.cloneElement(child, {
                style: {
                  ...child.props.style,
                  width: mobileWidth,
                  height: '400px',
                  minWidth: mobileWidth,
                  maxWidth: mobileWidth,
                }
              })}
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      {showNavigation && (
        <>
          <button
            onClick={goToPrevious}
            style={{ top: cardsPerView === 1 ? '317px' : '50%', zIndex: 1000 }}
            className="absolute left-4 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous card"
          >
            <svg style={{ top:5, left:5}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            style={{ top: cardsPerView === 1 ? '317px' : '50%', zIndex: 1000 }}
            className="absolute right-4 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next card"
          >
            <svg style={{ top:5, left:5}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;
