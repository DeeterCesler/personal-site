import { useEffect, useRef, useState } from 'react';
import { useColor } from '../../context/ColorContext';
import useCardState from './useCardState';
import './style.css';

const Card = ({ image = "/pics/code.jpg", alt, style, title, caption, link, cta = "See more" }) => {
    const { isFlipped, setIsFlipped, isHovered, setIsHovered, transform } = useCardState(2);
    const cardRef = useRef(null);
    const [color, setColor] = useState(null);
    const { getRandomColor, releaseColor } = useColor();

    useEffect(() => {
        const color = getRandomColor();
        setColor(color);
        return () => releaseColor(color);
    }, [getRandomColor, releaseColor]);

    return (
        <div
            ref={cardRef}
            className={`card ${isFlipped ? 'flipped' : ''}`}
            style={{
                ...style,
                transform,
                width: style?.width || '300px',
                height: style?.height || '400px',
                minWidth: style?.minWidth || '250px',
                maxWidth: style?.maxWidth || '300px'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="card-front" onClick={() => setIsFlipped(!isFlipped)}>
                <h2 className="card-title-overlay">{title}</h2>
                {/\.webm$/.test(image)
                    ? <video src={image} autoPlay loop muted playsInline style={{ maxHeight: '200px', width: '100%' }} />
                    : <img src={image} alt={alt} loading="lazy" style={{ maxHeight: '200px', width: '100%' }} />
                }
            </div>
            <div className="card-back" style={{ backgroundColor: color?.hex }} onClick={() => setIsFlipped(!isFlipped)}>
                <div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-caption">{caption}</p>
                    {link && <a className="card-link" href={link} target="_blank" rel="noopener noreferrer">{cta}</a>}
                </div>
            </div>
        </div>
    );
};

export default Card;
