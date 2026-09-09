'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import './ProjectGrid.css';

// Matches the breakpoint in ProjectGrid.css where the grid drops to one column.
const MOBILE_QUERY = '(max-width: 640px)';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return isMobile;
};

const ProjectCard = ({ image, alt, title, caption, link }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const isMobile = useIsMobile();

  // Mobile reveal is bound to scroll position rather than triggered by one, so
  // the description tracks the card up the viewport and lands wherever you stop.
  // A timed animation fired at a visibility threshold loses the race when you
  // scroll quickly: the card is gone before the 0.28s slide finishes, and you
  // never see the description at all.
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });
  const panelY = useTransform(scrollYProgress, [0.45, 0.85], ['100%', '0%']);
  const titleOpacity = useTransform(scrollYProgress, [0.5, 0.8], [1, 0]);

  // A second range for the way out, measured from the card's bottom edge so it
  // is independent of how tall the card is: 0 as the card's bottom passes the
  // middle of the screen, 1 as it clears the top. The panel fades and shrinks
  // back toward its bottom edge over that stretch, so it reads as retracting
  // rather than just vanishing at the viewport edge.
  const { scrollYProgress: exitProgress } = useScroll({
    target: cardRef,
    offset: ['end center', 'end start'],
  });
  // Opacity and scale each come from both ranges, multiplied together: the panel
  // fades and grows in as it rises, then fades and shrinks back out as the card
  // leaves. Combining them this way keeps the two ends independent, so tuning
  // the exit can't disturb the entry.
  const entryOpacity = useTransform(scrollYProgress, [0.45, 0.85], [0, 1]);
  const exitOpacity = useTransform(exitProgress, [0.35, 1], [1, 0]);
  const panelOpacity = useTransform([entryOpacity, exitOpacity], ([a, b]) => a * b);

  const entryScale = useTransform(scrollYProgress, [0.45, 0.85], [0.92, 1]);
  const exitScale = useTransform(exitProgress, [0.35, 1], [1, 0.88]);
  const panelScale = useTransform([entryScale, exitScale], ([a, b]) => a * b);

  const panelContent = (
    <>
      <h3 className="pg-panel-title">{title}</h3>
      <p className="pg-panel-caption">{caption}</p>
      {link && (
        <a
          href={link}
          className="pg-panel-link"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
        >
          View project ↗
        </a>
      )}
    </>
  );

  return (
    <div
      ref={cardRef}
      className={`pg-card${!isMobile && hovered ? ' is-active' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={alt} className="pg-card-img" loading="lazy" width="800" height="600" />

      {/* Title strip: fades out on mobile as the panel rises over it. */}
      <motion.div
        className="pg-card-title-bar"
        style={isMobile ? { opacity: titleOpacity } : undefined}
      >
        <span>{title}</span>
      </motion.div>

      {isMobile ? (
        <motion.div
          className="pg-card-panel"
          style={{
            y: panelY,
            opacity: panelOpacity,
            scale: panelScale,
            transformOrigin: 'bottom center',
          }}
        >
          {panelContent}
        </motion.div>
      ) : (
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="pg-card-panel"
              key="panel"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
            >
              {panelContent}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

const ProjectGrid = ({ projects }) => (
  <div className="project-grid">
    {projects.map((p) => (
      <ProjectCard key={p.id} {...p} />
    ))}
  </div>
);

export default ProjectGrid;
