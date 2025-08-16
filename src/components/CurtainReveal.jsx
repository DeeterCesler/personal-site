import React, { useState, useEffect, useRef } from 'react';
import Carousel from './Carousel';

/**
 * CurtainReveal Component
 * 
 * A component that reveals content through an animated curtain effect based on scroll position.
 * 
 * @param {number} startHeight - Initial height of the container
 * @param {number} innerHeight - Target height when fully revealed
 * @param {boolean} oneTime - Whether the reveal should lock after completion
 * @param {number} startTrigger - When to start the reveal (0=top enters, 1=bottom enters)
 * @param {number} speed - Multiplier for animation completion distance
 * @param {boolean} autoOpenOnShortPage - Auto-open when page is too short to scroll (80%+ visible)
 * @param {React.ReactNode} children - Content to be revealed
 */
const CurtainReveal = ({ 
  startHeight,
  innerHeight,
  oneTime = false,
  startTrigger = 0,     // 0-1: when to start (0=top enters, 1=bottom enters)
  speed = 1,            // multiplier for animation completion distance
  autoOpenOnShortPage = false, // Auto-open when page is too short to scroll
  children 
}) => {
  const [progress, setProgress] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  });
  const [isAutoOpened, setIsAutoOpened] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const checkIfPageTooShort = () => {
      if (!autoOpenOnShortPage) return false;
      
      const documentHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const scrollableHeight = documentHeight - viewportHeight;
      
      // If 80% or more of the page is already visible, consider it too short
      // This helps on devices like iPad where the page height might be close to viewport height
      return scrollableHeight <= (viewportHeight * 0.2);
    };
    
    const handleScroll = () => {
      // If auto-opened and page is short, keep curtain open and don't recalculate
      if (isAutoOpened && checkIfPageTooShort()) {
        setProgress(1);
        return;
      }
      
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
      
      // Check if page became too short after resize
      if (autoOpenOnShortPage && checkIfPageTooShort() && !isAutoOpened) {
        setIsAutoOpened(true);
        // Add a small delay to show the animation
        setTimeout(() => {
          setProgress(1);
        }, 100);
      }
      
      handleScroll(); // Recalculate on resize
    };
    
    // Check initial state for auto-open
    if (autoOpenOnShortPage && checkIfPageTooShort()) {
      setIsAutoOpened(true);
      // Add a small delay to show the animation
      setTimeout(() => {
        setProgress(1);
      }, 100);
    }
    
    // Only add scroll listener if not auto-opened to prevent fighting
    if (!isAutoOpened) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    window.addEventListener('resize', handleResize, { passive: true });
    handleScroll(); // Check initial position
    
    return () => {
      if (!isAutoOpened) {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [oneTime, isLocked, startTrigger, speed, screenSize, autoOpenOnShortPage, isAutoOpened]);

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
    
    // Get screen dimensions from state
    // const { width: screenWidth } = screenSize;
    
    // Calculate target responsive height based on screen size
    let targetHeight;
    // if (screenWidth <= 640) { // Mobile
    //   targetHeight = 525;
    // } else if (screenWidth < 1024) { // Tablet
    //   targetHeight = 450;
    // } else { // Desktop
      targetHeight = 450;
    // }
    
    // Start at startHeight and progressively expand to targetHeight
    const expandedHeight = startHeight + (targetHeight - startHeight) * revealProgress;
    
    // Ensure minimum height for the reveal anima640n
    const minHeight = startHeight + 50;
    return Math.max(expandedHeight, minHeight);
  };

  const getContentHeight = () => {
    const revealProgress = Math.max(0, Math.min(1, (progress - 0.8) / 0.2));
    const dynamicHeight = startHeight + (innerHeight * revealProgress);
    return `${Math.max(startHeight + 50, dynamicHeight)}px`;
  };

  const getContentMinHeight = () => {
    const revealProgress = Math.max(0, Math.min(1, (progress - 0.8) / 0.2));
    const dynamicHeight = startHeight + (innerHeight * revealProgress);
    return `${Math.max(startHeight + 50, dynamicHeight)}px`;
  };


  const isMobile = screenSize.width <= 640;

  return (
    <div 
      id="curtain-reveal"
      ref={ref}
      className="relative w-full overflow-hidden transition-all duration-700 ease-out inline-block"
      style={{ 
        height: `${getContainerHeight()}px`,
        width: '100vw',
        marginLeft: 'calc(50% - 50vw)',
        paddingTop: '0px',
        paddingBottom: '0px',
        // paddingTop:  isMobile ? '0' : '20px',
        // paddingBottom: isMobile ? '0' : '20px',
      }}
    >
      {/* Content */}
      <div 
        className="absolute inset-0 bg-slate-200 transition-all duration-100 ease-out border-t border-b overflow-hidden"
        style={{ 
          clipPath: getClipPath(),
          // borderColor: phase >= 2 ? 'white' : 'transparent',
          borderColor: 'white',
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
          className="absolute h-px bg-white transition-opacity duration-100 ease-out"
          style={{
            width: progress < 0.6 ? `${Math.max(0, (progress - 0.3) / 0.3) * 100}%` : '100%',
            height: '5px',
            right: 0,
            top: `${startHeight + (isMobile ? 0 : 0)}px`,
            transform: 'translateY(-50%)',
            opacity: getLineOpacity(),
            marginTop: isMobile ? '20px' : 0,
          }}
        />
      </div>
    </div>
  );
};
export default CurtainReveal;
