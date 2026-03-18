import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './ProjectGrid.css';

const ProjectCard = ({ image, alt, title, caption, link }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="pg-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={image} alt={alt} className="pg-card-img" />

      {/* Always-visible title strip */}
      <div className="pg-card-title-bar">
        <span>{title}</span>
      </div>

      {/* Hover panel slides up */}
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
          </motion.div>
        )}
      </AnimatePresence>
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
