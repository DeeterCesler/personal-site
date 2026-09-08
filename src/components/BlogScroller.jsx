'use client';

import { useEffect, useRef, useState } from 'react';
import './BlogScroller.css';

// Reading-progress indicator for blog posts: a circle in the top-right corner
// that fills as you scroll through the article, showing an x-mark while you're
// partway and a checkmark once you reach the end. Clicking it goes to `link`.
//
// This replaces the `circle-scroll` npm package, which did the same thing but
// dragged jQuery in as a runtime dependency. The scroll math below is a faithful
// port of that package's, so the thresholds are unchanged: nothing appears until
// ~20% read, the stroke fills from there, and the checkmark lands at 100%.

const DASH_LENGTH = 200; // stroke-dasharray, in % of the circle's path length
const CIRCLE_FILL = 40; // offset slack that keeps a filled circle from over-rotating

// Maps reading progress (0-100) onto the stroke-dashoffset the circle renders at.
// At zero progress the circle sits fully unfilled; past that it tracks scroll at
// double rate, so the visible fill spans roughly the 20%-100% range of the article.
const dashOffsetFor = (progress) => {
  if (progress <= 0) return DASH_LENGTH;
  return Math.max(-CIRCLE_FILL, DASH_LENGTH - progress * 2) + CIRCLE_FILL;
};

export default function BlogScroller({ link, children }) {
  const contentRef = useRef(null);
  const frameRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const measure = () => {
      const el = contentRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      if (rect.height === 0) return;

      // How far the viewport's bottom edge has travelled into the content,
      // as a percentage of the content's own height.
      const scrolled = window.innerHeight - rect.top;
      setProgress(Math.min(Math.max((scrolled / rect.height) * 100, 0), 100));
    };

    // Coalesce scroll/resize bursts into one measurement per animation frame;
    // the layout reads above are the expensive part of the handler.
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

  const dashOffset = dashOffsetFor(progress);
  const started = dashOffset < DASH_LENGTH;
  const complete = dashOffset <= CIRCLE_FILL;

  return (
    <div className="body-content" ref={contentRef}>
      <div className="blog-scroller">
        <a href={link} aria-label="Back to all posts">
          <div className="blog-scroller__marks">
            <div className="blog-scroller__ring">
              <svg viewBox="0 0 100 100" height="150px" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={`${DASH_LENGTH}%`}
                  strokeDashoffset={`${dashOffset}%`}
                />
              </svg>
            </div>

            <div className={`blog-scroller__check ${complete ? '' : 'is-hidden'}`}>
              <svg width="82px" height="82px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="m61.5 23.3-8.013-8.013-25.71 25.71-9.26-9.26-8.013 8.013 17.42 17.44z" />
              </svg>
            </div>

            <div className={`blog-scroller__x ${started && !complete ? '' : 'is-hidden'}`}>
              <svg width="40px" height="40px" viewBox="0 0 460.775 460.775" xmlns="http://www.w3.org/2000/svg">
                <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
              </svg>
            </div>

            <div className={`blog-scroller__backdrop ${started ? '' : 'is-hidden'}`}>
              <svg viewBox="0 0 100 100" height="150px" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="29" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      {children}
    </div>
  );
}
