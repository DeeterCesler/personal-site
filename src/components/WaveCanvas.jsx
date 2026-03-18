import React, { useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const makeWaves = (h) =>
  Array.from({ length: 18 }, (_, i) => ({
    y: (h / 18) * i + h / 36,
    amplitude: 18 + Math.random() * 72,
    frequency: 0.001 + Math.random() * 0.0025,
    speed: 0.003 + Math.random() * 0.007,
    phase: Math.random() * Math.PI * 2,
    opacity: 0.02 + Math.random() * 0.045,
    lw: 0.5 + Math.random() * 0.9,
  }));

const WaveCanvas = () => {
  const canvasRef = useRef(null);
  const frameRef = useRef(0);
  const wavesRef = useRef([]);
  const animRef = useRef(null);
  const { isDark } = useTheme();
  const isDarkRef = useRef(isDark);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      wavesRef.current = makeWaves(canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const dark = isDarkRef.current;
      const waveRgb = dark ? '255,255,255' : '0,0,0';
      const opacityScale = dark ? 13.5 : 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.shadowBlur = dark ? 10 : 0;
      ctx.shadowColor = dark ? 'rgba(255,255,255,0.5)' : 'transparent';
      wavesRef.current.forEach((w) => {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(${waveRgb},${w.opacity * opacityScale})`;
        ctx.lineWidth = w.lw;
        for (let x = 0; x <= canvas.width + 4; x += 4) {
          const y =
            w.y +
            Math.sin(x * w.frequency + frameRef.current * w.speed + w.phase) *
              w.amplitude;
          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
      frameRef.current++;
      animRef.current = requestAnimationFrame(draw);
    };

    frameRef.current = 0;
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
};

export default WaveCanvas;
