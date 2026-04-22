import { useState, useEffect } from 'react';

const useCardState = (rotationRange = 2) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    setRotation(Math.random() * rotationRange * 2 - rotationRange);
  }, []);

  const transform = [
    `rotate(${rotation}deg)`,
    isFlipped ? 'rotateY(180deg)' : '',
    isHovered && !isFlipped ? 'scale(1.05)' : '',
  ].filter(Boolean).join(' ');

  return { isFlipped, setIsFlipped, isHovered, setIsHovered, transform };
};

export default useCardState;
