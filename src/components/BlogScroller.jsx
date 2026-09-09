'use client';

import { useEffect, useRef, useState } from 'react';
import './BlogScroller.css';

// Reading-progress dial for blog posts: a small ring in the top-right corner
// that fills as you move through the article. While there's still article left
// it doubles as a page-down control; at the end it turns into a checkmark and
// becomes a plain indicator.
//
// Geometry is derived rather than hand-placed. The old version positioned the
// ring, the checkmark and a backing circle as three separately fixed elements
// nudged with magic pixel offsets, so they never quite lined up, and faded them
// with a 5s transition, which read as the indicator being blank on arrival.
const SIZE = 44;
const STROKE = 2.5;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function BlogScroller({ children }) {
  const contentRef = useRef(null);
  const frameRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = contentRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;

      // Fraction of the article actually scrolled through. Measuring where the
      // viewport's bottom edge falls inside the content instead reaches 100%
      // roughly a screenful before the end, so the ring closed while there was
      // still plenty left to read.
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) {
        setProgress(rect.bottom <= window.innerHeight ? 1 : 0);
        return;
      }
      setProgress(Math.min(Math.max(-rect.top / scrollable, 0), 1));
    };

    // Coalesce scroll/resize bursts into one measurement per frame; the layout
    // read above is the expensive part.
    const schedule = () => {
      cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, []);

  const complete = progress >= 0.999;
  const centre = SIZE / 2;

  // Mid-article the dial pages down by half a screen. At the end it is purely
  // an indicator and does nothing, so it is disabled rather than left as a
  // control that silently no-ops under the cursor.
  const handleClick = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: 'smooth' });
  };

  return (
    <div className="body-content" ref={contentRef}>
      <button
        type="button"
        className={`blog-scroller${complete ? ' is-complete' : ''}`}
        onClick={handleClick}
        disabled={complete}
        aria-label={
          complete
            ? 'Article finished'
            : `Scroll down (${Math.round(progress * 100)}% read)`
        }
      >
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden="true">
          {/* Solid disc so the article never shows through the dial */}
          <circle className="blog-scroller__disc" cx={centre} cy={centre} r={RADIUS} />

          <circle
            className="blog-scroller__track"
            cx={centre}
            cy={centre}
            r={RADIUS}
            strokeWidth={STROKE}
          />

          <circle
            className="blog-scroller__bar"
            cx={centre}
            cy={centre}
            r={RADIUS}
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={CIRCUMFERENCE * (1 - progress)}
            transform={`rotate(-90 ${centre} ${centre})`}
          />

          {/* Both glyphs are drawn in the ring's own coordinate space, so they
              are centred by construction rather than by offset nudging. The
              arrow reads as "keep going" while there's article left; it swaps
              for the check at the end. */}
          <path
            className="blog-scroller__arrow"
            d="M22 15 v13 M16.8 22.8 L22 28 l5.2 -5.2"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="blog-scroller__check"
            d="M14.5 22.5 l5 5 L30 17"
            fill="none"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {children}
    </div>
  );
}
