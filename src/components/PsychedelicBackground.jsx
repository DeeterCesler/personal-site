// DO NOT DELETE: kept intentionally for future use even when no page imports it.
// If you "clean up unused components," skip this one.
import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import './psychedelic.css';

const randHue = () => Math.floor(Math.random() * 360);
const randStep = () => Math.floor(Math.random() * 3) + 1;

const PsychedelicBackground = ({ children }) => {
  const { isDark } = useTheme();
  const [hues, setHues] = useState(() => [randHue(), randHue()]);
  const huesRef = useRef(hues);
  const stepRef = useRef(randStep());

  useEffect(() => {
    huesRef.current = hues;
  }, [hues]);

  useEffect(() => {
    const id = setInterval(() => {
      const [h0, h1] = huesRef.current;
      const s = stepRef.current;
      const next = [h0, h1].map((hue, i) => {
        const target = i === 0 ? h1 : h0;
        const newHue = (hue + s) % 360;
        return Math.abs(newHue - target) < s ? target : newHue;
      });
      stepRef.current = randStep();
      setHues(next);
    }, 32);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="psychedelic-background" style={{
      position: 'relative',
      width: '100vw',
      height: '105%',
      background: `linear-gradient(to right,
        hsla(${hues[0]}, 100%, ${isDark ? '30%' : '70%'}, 0.8),
        hsla(${hues[1]}, 100%, ${isDark ? '30%' : '70%'}, 0.8))`,
    }}>
      {children}
    </div>
  );
};

export default PsychedelicBackground;
