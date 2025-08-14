import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './Card/Card';

const Carousel = ({ children, containerWidth }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [showNavigation, setShowNavigation] = useState(false);
  const carouselRef = useRef(null);

  // Calculate responsive settings
  useEffect(() => {
    console.log('Container width:', containerWidth);
    if (!containerWidth) return;

    let newCardsPerView = 1;
    let newShowNavigation = false;

    if (containerWidth < 640) {
      // Mobile: 1 card, always show navigation
      newCardsPerView = 1;
      newShowNavigation = true;
    } else if (containerWidth < 1024) {
      // Tablet: 3 cards
      newCardsPerView = 3;
      newShowNavigation = React.Children.count(children) > 3;
    } else {
      // Desktop: 5 cards
      newCardsPerView = 5;
      newShowNavigation = React.Children.count(children) > 5;
    }

    console.log('Cards per view:', newCardsPerView, 'Show navigation:', newShowNavigation);
    setCardsPerView(newCardsPerView);
    setShowNavigation(newShowNavigation);
  }, [containerWidth, children]);

  const totalCards = React.Children.count(children);
  const maxIndex = Math.max(0, totalCards - cardsPerView);

  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % totalCards);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + totalCards) % totalCards);
  };

  const goToCard = (index) => {
    setCurrentIndex(index % totalCards);
  };

  // Calculate card positions and visibility
  const getCardStyle = (index) => {
    const cardWidth = 300;
    const gap = 20;
    const totalWidth = cardWidth + gap;
    
    // Calculate relative position considering circular nature
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
      } else if (relativeIndex === -1) {
        // Previous card - show on left
        x = -320; // 300px card + 20px gap
        opacity = 0.3;
        scale = 0.9;
        zIndex = 5;
      } else if (relativeIndex === 1) {
        // Next card - show on right
        x = 320; // 300px card + 20px gap
        opacity = 0.3;
        scale = 0.9;
        zIndex = 5;
      } else {
        // Hidden cards
        opacity = 0;
        scale = 0.8;
        zIndex = 1;
      }
    } else {
      // Tablet/Desktop: show multiple cards
      if (relativeIndex >= 0 && relativeIndex < cardsPerView) {
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
    // Show all cards in grid layout when no navigation needed
    return (
      <div className="flex flex-wrap items-center justify-center gap-5 p-4">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type.name === 'Card') {
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
  }

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative flex items-center justify-center"
        style={{ 
          height: '525px',
          width: '100%'
        }}
      >
        <AnimatePresence mode="wait">
          {React.Children.map(children, (child, index) => {
            console.log('Child:', child, 'Type:', child?.type?.name);
            if (React.isValidElement(child) && (child.type.name === 'Card' || child.type?.displayName === 'Card')) {
              const { image, alt, style, title, caption, link } = child.props;
              const cardStyle = getCardStyle(index);
              
              console.log('Card style:', cardStyle, 'for index:', index);
              
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
                    width: '300px',
                    height: '400px'
                  }}
                >
                  <Card
                    image={image}
                    alt={alt}
                    style={{
                      ...style,
                      width: '300px',
                      height: '400px',
                      minWidth: '300px',
                      maxWidth: '300px'
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
