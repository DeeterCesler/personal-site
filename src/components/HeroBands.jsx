import React from 'react';
import './HeroBands.css';

// Same bands as the OG video (scripts/og-video.html): fat outlined stripes that
// sweep in one after another on load, then stay put. Pure SVG + CSS, so it
// renders in the static export with no client JS.
const COLORS = [
  { name: 'pink', hex: '#FF5C8A' },
  { name: 'orange', hex: '#FF8A1F' },
  { name: 'yellow', hex: '#FFE14D' },
  { name: 'mint', hex: '#5DE8A8' },
];
const WIDTH = 70;
// Bands enter off the left edge and run up-right until they leave the top edge.
const DIR = { x: 0.75, y: -0.66 };
const NORMAL = { x: 0.66, y: 0.75 };
const START = { x: -160, y: 470 };
const LENGTH = 1100;

const HeroBands = () => (
  <svg className="hero-bands" viewBox="0 0 1000 600" preserveAspectRatio="xMinYMax slice" aria-hidden="true">
    {COLORS.map(({ name, hex }, i) => {
      // Side by side along the normal of the band direction.
      const off = (i - 1.5) * WIDTH;
      const x = START.x + NORMAL.x * off;
      const y = START.y + NORMAL.y * off;
      const d = `M ${x} ${y} l ${DIR.x * LENGTH} ${DIR.y * LENGTH}`;
      return (
        <g key={name} style={{ '--i': i }}>
          <path className="hero-band-outline" d={d} pathLength="1" strokeWidth={WIDTH + 10} />
          <path className="hero-band" data-color={name} d={d} pathLength="1" stroke={hex} strokeWidth={WIDTH} />
        </g>
      );
    })}
  </svg>
);

export default HeroBands;
