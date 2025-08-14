import React, { useState, useEffect, useRef } from 'react';
import Carousel from './Carousel';

const CurtainReveal = ({ 
  startHeight = 200,
  innerHeight = 200,
  oneTime = false,
  startTrigger = 0,     // 0-1: when to start (0=top enters, 1=bottom enters)
  speed = 1,            // multiplier for animation completion distance
  children 
}) => {
  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const ref = useRef();

   

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      
      if (oneTime) {
        if (!isLocked) {
          const elementVisible = rect.top <= viewHeight && rect.bottom >= 0;
          if (elementVisible) {
            const viewProgress = Math.max(0, (viewHeight - rect.top) / viewHeight);
            const adjustedProgress = Math.max(0, (viewProgress - startTrigger) / (1 - startTrigger)) * speed;
            const scrollProgress = Math.min(1, adjustedProgress);
            setProgress(scrollProgress);
            if (scrollProgress >= 1) {
              setIsLocked(true);
            }
          } else if (rect.bottom < 0) {
            setProgress(1);
            setIsLocked(true);
          } else {
            setProgress(0);
          }
        }
      } else {
        const elementVisible = rect.top <= viewHeight && rect.bottom >= 0;
        if (elementVisible) {
          const viewProgress = Math.max(0, (viewHeight - rect.top) / viewHeight);
          const adjustedProgress = Math.max(0, (viewProgress - startTrigger) / (1 - startTrigger)) * speed;
          const scrollProgress = Math.min(1, adjustedProgress);
          setProgress(scrollProgress);
        } else if (rect.bottom < 0) {
          setProgress(1);
        } else {
          setProgress(0);
        }
      }
    };
    
      const handleResize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    handleScroll(); // Recalculate on resize
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleResize, { passive: true });
  handleScroll(); // Check initial position
  
  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleResize);
  };
  }, [oneTime, isLocked, startTrigger, speed, screenSize]);



  const getPhase = () => {
    if (progress < 0.3) return 0;
    if (progress < 0.6) return 1;
    if (progress < 0.8) return 2;
    return 3;
  };

  const phase = getPhase();

  const getClipPath = () => {
    if (progress < 0.3) return 'inset(50% 100% 50% 0%)';
    if (progress < 0.6) {
      const lineProgress = (progress - 0.3) / 0.3;
      return `inset(50% ${100 - lineProgress * 100}% 50% 0%)`;
    }
    if (progress < 0.8) return 'inset(50% 0% 50% 0%)';
    
    const openProgress = (progress - 0.8) / 0.2;
    const insetTop = 50 - openProgress * 50;
    const insetBottom = 50 - openProgress * 50;
    return `inset(${insetTop}% 0% ${insetBottom}% 0%)`;
  };

  const getLineOpacity = () => {
    if (progress < 0.3) return 0;
    if (progress < 0.6) return 1;
    if (progress < 0.8) return 1;
    return 0;
  };

  const getContainerHeight = () => {
    const revealProgress = Math.max(0, Math.min(1, (progress - 0.8) / 0.2));
    const baseHeight = startHeight + (innerHeight * revealProgress);
    
    // Get screen dimensions from state
    const { width: screenWidth } = screenSize;
    
    // Calculate responsive height based on screen size
    let responsiveHeight = baseHeight;
    
    if (screenWidth < 640) { // Mobile
      // On mobile, calculate height based on actual content layout
      const cardHeight = 400; // Card height from CSS
      const cardWidth = Math.min(300, screenWidth - 32); // Responsive card width
      const gap = 16; // Gap between cards
      const padding = 32; // Container padding
      
      // Calculate how many cards fit per row
      const cardsPerRow = Math.max(1, Math.floor((screenWidth - padding) / (cardWidth + gap)));
      
      // Calculate how many rows we need
      const totalCards = React.Children.count(children);
      const rowsNeeded = Math.ceil(totalCards / cardsPerRow);
      
      // Calculate total content height needed
      const contentHeight = rowsNeeded * (cardHeight + gap) + padding;
      
      // Use the larger of base height or content height
      // responsiveHeight = Math.max(baseHeight, contentHeight);
      responsiveHeight = 525;
      
    } else if (screenWidth < 1024) { // Tablet
      // On tablet, moderate height adjustment
      responsiveHeight = baseHeight + 100;
    } else { // Desktop
      // On desktop, use original calculation
      responsiveHeight = baseHeight;
    }
    
    // Ensure minimum height for the reveal animation
    const minHeight = startHeight + 100;
    return Math.max(responsiveHeight, minHeight);
  };

  const getContentHeight = () => {
    const { width: screenWidth } = screenSize;
    
    if (screenWidth < 640) { // Mobile
      // On mobile, use min-height to let content determine actual height
      return 'auto';
    } else {
      // On larger screens, use fixed height for animation
      return `${startHeight + innerHeight}px`;
    }
  };

  const getContentMinHeight = () => {
    const { width: screenWidth } = screenSize;
    
    if (screenWidth < 640) { // Mobile
      // On mobile, ensure minimum height for the reveal animation
      return `${startHeight + innerHeight}px`;
    } else {
      // On larger screens, use the same height
      return `${startHeight + innerHeight}px`;
    }
  };


  const isMobile = screenSize.width < 640;

  return (
    <div 
      id="curtain-reveal"
      ref={ref}
      className="relative w-full overflow-hidden transition-all duration-700 ease-out inline-block"
      style={{ 
        height: `${getContainerHeight()}px`,
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        paddingTop:  isMobile ? '0' : '100px',
        paddingBottom: isMobile ? '0' : '100px',
      }}
    >
      {/* Content */}
      <div 
        className="absolute inset-0 bg-slate-200 transition-all duration-100 ease-out border-t border-b border-white overflow-hidden"
        style={{ 
          clipPath: getClipPath(),
          borderColor: phase >= 2 ? 'white' : 'transparent',
          borderLeft: 'none',
          borderRight: 'none',
          borderWidth: '5px',
          height: getContentHeight(),
          minHeight: getContentMinHeight(),
          position: 'relative'
        }}
      >
        {children ? (
          <Carousel containerWidth={screenSize.width}>
            {children}
          </Carousel>
        ) : (
          <div className="text-white text-center">
            <h2 className="text-4xl font-bold mb-4">Hidden Content</h2>
            <p className="text-xl">Revealed through the curtain</p>
          </div>
        )}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div 
          id="horizontal-line"
          className="absolute top-1/2 h-px bg-white transition-opacity duration-100 ease-out"
          style={{
            width: progress < 0.6 ? `${Math.max(0, (progress - 0.3) / 0.3) * 100}%` : '100%',
            height: '5px',
            right: 0,
            transform: 'translateY(-50%)',
            opacity: getLineOpacity(),
            marginTop: 10,
          }}
        />
      </div>
    </div>
  );
};
export default CurtainReveal;
