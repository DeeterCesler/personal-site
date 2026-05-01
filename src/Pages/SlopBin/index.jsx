import React from 'react';
import { motion } from 'framer-motion';
import SlopCard from './SlopCard';
import './style.css';

const projects = [
  {
    id: 'dungeon',
    title: 'jQuery Game: Dungeon Crawler',
    caption: 'Browser-based dungeon crawler I built in boot camp while learning jQuery. Keyboard required — desktop only.',
    link: '/dungeon',
    badge: 'made in boot camp',
    image: '/pics/dungeon.webm',
    alt: 'Dungeon Crawler game',
  },
  {
    id: 'circle-scroller',
    title: 'NPM Package: Circle Scroller',
    caption: 'React component that shows reading progress as a circle — like TechCrunch\'s article indicator. npm i circle-scroller',
    link: 'https://www.npmjs.com/package/circle-scroll/',
    badge: 'npm package',
    image: '/pics/scroller.webm',
    alt: 'Circle Scroller',
  },
  {
    id: 'quick-counter',
    title: 'NPM Package: Quick Counter',
    caption: 'Wrap any number and it counts up to it on page load. Configurable duration. npm i quick-count',
    link: 'https://www.npmjs.com/package/quick-count/',
    badge: 'npm package',
    image: '/pics/code.jpg',
    alt: 'Quick Counter',
  },
  {
    id: 'kaprekar',
    title: 'Rust Crate: Kaprekar',
    caption: "Kaprekar's constant is a fun (but useless) piece of math. Free, open-source Rust crate.",
    link: 'https://crates.io/crates/kaprekar',
    badge: 'rust crate',
    image: '/pics/code.jpg',
    alt: 'Kaprekar Rust crate',
  },
  {
    id: 'chiasm-builder',
    title: 'Chiasm Builder',
    caption: 'Interactive tool for building and visualizing chiastic structures in biblical texts: color-coded, indented, and shareable.',
    link: 'https://splendid-selkie-d0f26a.netlify.app/',
    badge: 'web tool',
    image: '/pics/chiasm.png',
    alt: 'Chiasm Builder showing Genesis flood narrative chiastic structure',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: -52 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const SlopBin = () => {
  return (
    <div className="slop-bin">
      <div className="slop-bin-inner">
        <h1 className="slop-bin-header" style={{ marginTop: '2rem' }}>SLOP BIN</h1>
        <p className="slop-bin-sub">stuff i made for fun, curiosity, or on a weekend</p>
        <div className="slop-card-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
            >
              <SlopCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlopBin;
