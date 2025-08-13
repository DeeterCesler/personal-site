import { useState, useEffect, useRef } from 'react';
import { useColor } from '../../context/ColorContext';
import './style.css';

const Card = ({ image, alt, style, title, caption, link, onDrag, isDragging, dragOffset }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef(null);
    const [color, setColor] = useState(null);
    const { getRandomColor, releaseColor } = useColor();
    const [askew, setAskew] = useState(0);
    const [isDraggingLocal, setIsDraggingLocal] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const setDegrees = () => {
        const degrees = Math.random() * 10 - 5;
        setAskew(degrees);
    };

    const handleClick = (e) => {
        // Only flip if not dragging
        if (!isDraggingLocal) {
            setIsFlipped(!isFlipped);
        }
    };
    
    const handleMouseEnter = () => {
        if (!isDraggingLocal) {
            setIsHovered(true);
        }
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseDown = (e) => {
        if (e.button === 0) { // Left mouse button only
            setDragStart({ x: e.clientX, y: e.clientY });
            setIsDraggingLocal(true);
            setIsHovered(false);
        }
    };
    
    useEffect(() => {
        const color = getRandomColor();
        setDegrees();
        setColor(color);
        return () => releaseColor(color);
    }, [getRandomColor, releaseColor]);
    
    // Add global mouse event listeners for drag

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (isDraggingLocal && onDrag) {
                const deltaX = e.clientX - dragStart.x;
                const deltaY = e.clientY - dragStart.y;
                onDrag(deltaX, deltaY);
            }
        };
    
        const handleMouseUp = () => {
            setIsDraggingLocal(false);
            setDragStart({ x: 0, y: 0 });
        };

        if (isDraggingLocal) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isDraggingLocal, dragStart, onDrag]);

    // Calculate position based on drag offset
    const getTransform = () => {
        let transform = `rotate(${askew}deg)`;
        
        if (isFlipped) {
            transform += ` rotateY(180deg)`;
        }
        
        if (isHovered && !isDraggingLocal) {
            transform += ` scale(1.05)`;
        }
        
        if (dragOffset) {
            transform += ` translate(${dragOffset.x}px, ${dragOffset.y}px)`;
        }
        
        return transform.trim();
    };

    return (
        <div 
            ref={cardRef} 
            className={`card ${isFlipped ? 'flipped' : ''} w-full max-w-[300px] min-w-[250px] sm:w-[300px] ${isDraggingLocal ? 'dragging' : ''}`} 
            style={{
                ...style, 
                transform: getTransform(),
                cursor: isDraggingLocal ? 'grabbing' : 'grab',
                userSelect: 'none',
                position: 'relative',
                zIndex: isDraggingLocal ? 1000 : 'auto'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
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