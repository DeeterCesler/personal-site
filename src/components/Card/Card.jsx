import { useState, useEffect, useRef } from 'react';
import { useColor } from '../../context/ColorContext';
import './style.css';

const Card = ({ image, alt, style, title, caption, link }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const [color, setColor] = useState(null);
    const { getRandomColor, releaseColor } = useColor();
    const [askew, setAskew] = useState(0);

    const setDegrees = () => {
        const degrees = Math.random() * 10 - 5;
        setAskew(degrees);
    };

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };
    
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    
    useEffect(() => {
        const color = getRandomColor();
        setDegrees();
        setColor(color);
        return () => releaseColor(color);
    }, [getRandomColor, releaseColor]);

    // Calculate transform
    const getTransform = () => {
        let transform = `rotate(${askew}deg)`;
        
        if (isFlipped) {
            transform += ` rotateY(180deg)`;
        }
        
        if (isHovered) {
            transform += ` scale(1.05)`;
        }
        
        return transform.trim();
    };

    return (
        <div 
            ref={cardRef} 
            className={`card ${isFlipped ? 'flipped' : ''}`} 
            style={{
                ...style, 
                transform: getTransform(),
                width: style?.width || '300px',
                height: style?.height || '400px'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="card-front" onClick={handleClick}>
                {/* overlay the title over the image */}
                <h2 className="card-title-overlay">{title}</h2>
                <img src={image} alt={alt} style={{ maxHeight: '200px', width: '100%' }} />
            </div>
            <div className="card-back" style={{ backgroundColor: color?.hex }} onClick={handleClick}>
                <div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-caption">{caption}</p>
                    {link && <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">See more</a>}

                </div>
            </div>
        </div>
    );
};

export default Card;