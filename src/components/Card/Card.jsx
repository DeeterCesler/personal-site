'use client';

import { useEffect, useRef, useState } from 'react';
import { useColor } from '@/context/ColorContext';
import useCardState from './useCardState';
import './style.css';

const Card = ({ image = "/pics/code.jpg", alt, style, title, subtitle, caption, link, cta = "See more", link2, cta2 = "See more", isLogo }) => {
    const { isFlipped, setIsFlipped, isHovered, setIsHovered, transform } = useCardState(2);
    const cardRef = useRef(null);
    const [color, setColor] = useState(null);
    const { getRandomColor, releaseColor } = useColor();

    useEffect(() => {
        const color = getRandomColor();
        setColor(color);
        return () => releaseColor(color);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={cardRef}
            className={`card ${isFlipped ? 'flipped' : ''}`}
            data-logo={isLogo || undefined}
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
                <h2 className="card-title-overlay">
                    {title}
                    {subtitle && <span className="card-subtitle">{subtitle}</span>}
                </h2>
                {/\.webm$/.test(image)
                    ? <video src={image} autoPlay loop muted playsInline />
                    // Logo cards (isLogo) must scale the whole logo to fit within the card, never crop it.
                    : <img src={image} alt={alt} loading="lazy" width="400" height="200" style={{ maxHeight: '200px', width: '100%', height: 'auto', ...(isLogo && { height: '100%', maxHeight: 'none', objectFit: 'contain', objectPosition: 'calc(50% + 5px) 50%', backgroundColor: '#fff', padding: '4px', boxSizing: 'border-box' }) }} />
                }
            </div>
            <div className="card-back" style={{ backgroundColor: color?.hex }} onClick={() => setIsFlipped(!isFlipped)}>
                <div>
                    <h3 className="card-title">{title}</h3>
                    <p className="card-caption">{caption}</p>
                    {link && <a className="card-link" href={link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 700 }}>{cta}</a>}
                    {link2 && <a className="card-link" href={link2} target="_blank" rel="noopener noreferrer" style={{ marginLeft: link ? '12px' : 0 }}>{cta2}</a>}
                </div>
            </div>
        </div>
    );
};

export default Card;
