import React, { useState, useEffect } from 'react';
import './psychedelic.css';
import ThreeJSModel from './ThreeJSModel';

const PsychedelicBackground = ({children, showModel = true, modelUrl = '/models/Flower.glb', modelPosition = [0, 0, 0], modelScale = 2}) => {
  const [hues, setHues] = useState([Math.floor(Math.random() * 360), Math.floor(Math.random() * 360)]); // Array of two hues
  const [step, setStep] = useState(() => Math.floor(Math.random() * 1) + 1); // Random step initialization

  useEffect(() => {
    const updateColors = () => {
      const newHues = hues.map((hue, index) => {
        const targetHue = index === 0 ? hues[1] : hues[0]; // Alternate target hues
        const newHue = (hue + step) % 360;
        const distance = Math.abs(newHue - targetHue);

        if (distance < step) {
          return targetHue;
        } else {
          return newHue;
        }
      });

      setHues(newHues);
      setStep(Math.floor(Math.random()) + 1);
    };

    const intervalId = setInterval(updateColors, 32);

    return () => clearInterval(intervalId);
  }, [hues, step]);

  return (
    <div className="psychedelic-background" style={{
      position: 'relative',
      width: '100vw',
      height: '105%',
      background: `linear-gradient(to right, 
        hsla(${hues[0]}, 100%, 70%, 0.8), 
        hsla(${hues[1]}, 100%, 70%, 0.8))`,
    }}>
      {showModel && (
        <ThreeJSModel 
          modelUrl={modelUrl} 
          position={modelPosition} 
          scale={modelScale}
        />
      )}
      {children}
    </div>
  );
};

export default PsychedelicBackground;
