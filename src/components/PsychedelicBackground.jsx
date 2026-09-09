'use client';

// DO NOT DELETE: kept intentionally for future use even when no page imports it.
// If you "clean up unused components," skip this one.
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import './psychedelic.css';

// useLayoutEffect runs before the browser paints, so the randomised hues are in
// place for the first visible frame; plain useEffect would paint the fixed
// starting pair first. React warns about useLayoutEffect during SSR, and the
// server never paints anyway, so fall back to useEffect there.
const useBeforePaint = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const randHue = () => Math.floor(Math.random() * 360);
const randStep = () => Math.floor(Math.random() * 3) + 1;

const PsychedelicBackground = ({ children }) => {
  const { isDark } = useTheme();
  // Fixed on the server and on the first client render, then randomised before
  // the first paint. Rolling random hues in the initialiser gave the two
  // renders different gradients, so the style mismatched on hydration.
  const [hues, setHues] = useState([0, 180]);
  const huesRef = useRef(hues);
  const stepRef = useRef(1);

  useEffect(() => {
    huesRef.current = hues;
  }, [hues]);

  useBeforePaint(() => {
    stepRef.current = randStep();
    setHues([randHue(), randHue()]);
  }, []);

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
