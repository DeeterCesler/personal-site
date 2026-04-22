import { useState } from 'react';
import useCardState from '../../components/Card/useCardState';

const randomRadius = () => {
  const r = () => Math.floor(Math.random() * 7 + 2);
  return `${r()}px ${r()}px ${r()}px ${r()}px / ${r()}px ${r()}px ${r()}px ${r()}px`;
};

const SlopCard = ({ title, caption, link, badge, image, alt, placeholder }) => {
  const { isFlipped, setIsFlipped, isHovered, setIsHovered, transform } = useCardState(6);
  const [radius] = useState(randomRadius);

  return (
    <div
      className={`slop-card${isFlipped ? ' flipped' : ''}${placeholder ? ' slop-placeholder' : ''}`}
      style={{ transform, '--card-radius': radius }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="slop-card-front" onClick={() => setIsFlipped(true)}>
        {placeholder ? (
          <div className="slop-placeholder-front">
            <span>???</span>
          </div>
        ) : (
          <>
            <h3 className="slop-title-overlay">{title}</h3>
            <img src={image} alt={alt} className="slop-card-img" />
          </>
        )}
      </div>

      <div className="slop-card-back" onClick={() => setIsFlipped(false)}>
        <div className="slop-card-back-inner">
          {badge && <span className="slop-badge">{badge}</span>}
          <h3 className="slop-card-title-back">{title}</h3>
          <p className="slop-card-caption">{caption}</p>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer" className="slop-card-link">
              open →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default SlopCard;
