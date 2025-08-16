import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card/Card';

const Carousel = ({ children, containerWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [showNavigation, setShowNavigation] = useState(true);
  const carouselRef = useRef(null);

  const checkContainerWidth = () => {
    if (!containerWidth) return;

    let newCardsPerView = 1;
    let newShowNavigation = false;

    if (containerWidth <= 640) {
      // Mobile: 1 card, always show navigation
      newCardsPerView = 1;
      newShowNavigation = true;
      console.log('Mobile detected:', containerWidth, 'cardsPerView:', newCardsPerView);
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
  };

  // Calculate responsive settings
  useEffect(() => {
    checkContainerWidth();
  }, [containerWidth, children]);

  useEffect(() => {
    window.addEventListener('resize', checkContainerWidth);
    return () => window.removeEventListener('resize', checkContainerWidth);
  }, []);

  const totalCards = React.Children.count(children);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalCards);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + totalCards) % totalCards);
  };

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

    // Mobile: show preview edges with lower opacity
    if (cardsPerView === 1) {
      if (relativeIndex === 0) {
        // Current card - center it
        x = 0;
        opacity = 1;
        scale = 1;
        zIndex = 10;
        console.log('Center card:', { index, x, opacity, scale, containerWidth, cardWidth });
      } else if (relativeIndex === -1) {
        // Previous card - show on left, but ensure it's visible on narrow screens
        const maxLeftOffset = Math.min(320, Math.max(50, (containerWidth - cardWidth) / 2));
        x = -maxLeftOffset;
        opacity = 0.3;
        scale = 0.9;
        zIndex = 5;
        console.log('Left card:', { index, x, opacity, scale, containerWidth, cardWidth, maxLeftOffset });
      } else if (relativeIndex === 1) {
        // Next card - show on right, but ensure it's visible on narrow screens
        const maxRightOffset = Math.min(320, Math.max(50, (containerWidth - cardWidth) / 2));
        x = maxRightOffset;
        opacity = 0.3;
        scale = 0.9;
        zIndex = 5;
        console.log('Right card:', { index, x, opacity, scale, containerWidth, cardWidth, maxRightOffset });
      } else {
        // Hidden cards
        opacity = 0;
        scale = 0.8;
        zIndex = 1;
      }
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

  console.log('Mobile render check:', {
    containerWidth,
    showNavigation, 
    childrenCount: React.Children.count(children),
    cardsPerView
  });
  if (!showNavigation) {
    // Show all cards in grid layout when no navigation needed
    return (
      <div className="flex flex-wrap items-center justify-center gap-5 p-4">
        {React.Children.map(children, (child, index) => {
          console.log('Rendering child:', index, child?.type)
          if (React.isValidElement(child)) {
            const { image, alt, style, title, caption, link } = child.props;
            return (
              <Card
                key={index}
                image={image}
                alt={alt}
                style={style}
                title={title}
                caption={caption}
                link={link}
              />
            );
          }
          return child;
        })}
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
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child, index) => {
            console.log('Show navvy Rendering child:', index, child?.type)
            if (React.isValidElement(child)) {
              const { image, alt, style, title, caption, link } = child.props;
              const cardStyle = getCardStyle(index);

              return (
                <motion.div
                  key={index}
                  className="absolute"
                  initial={false}
                  animate={{
                    x: cardStyle.x,
                    opacity: cardStyle.opacity,
                    scale: cardStyle.scale
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    zIndex: cardStyle.zIndex,
                    width: containerWidth <= 640 ? Math.min(300, containerWidth - 40) : '300px',
                    height: '400px'
                  }}
                >
                  <Card
                    image={image}
                    alt={alt}
                    style={{
                      ...style,
                      width: containerWidth <= 640 ? Math.min(300, containerWidth - 40) : '300px',
                      height: '400px',
                      minWidth: containerWidth <= 640 ? Math.min(300, containerWidth - 40) : '300px',
                      maxWidth: containerWidth <= 640 ? Math.min(300, containerWidth - 40) : '300px'
                    }}
                    title={title}
                    caption={caption}
                    link={link}
                  />
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      {showNavigation && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous card"
          >
            <svg style={{ top:5, left:5}} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
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
