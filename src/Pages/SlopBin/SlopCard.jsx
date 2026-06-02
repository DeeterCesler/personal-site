import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCardState from '../../components/Card/useCardState';

const randomRadius = () => {
  const r = () => Math.floor(Math.random() * 7 + 2);
  return `${r()}px ${r()}px ${r()}px ${r()}px / ${r()}px ${r()}px ${r()}px ${r()}px`;
};

const SlopCard = ({ title, caption, link, cta = 'open →', link2, cta2 = 'open →', badge, image, alt, placeholder, style }) => {
  const { isFlipped, setIsFlipped, isHovered, setIsHovered, transform } = useCardState(6);
  const [radius] = useState(randomRadius);

  const renderLink = (href, label) => {
    if (!href) return null;
    const stop = e => e.stopPropagation();
    return href.startsWith('/')
      ? <Link to={href} className="slop-card-link" onClick={stop} onTouchEnd={stop}>{label}</Link>
      : <a href={href} target="_blank" rel="noopener noreferrer" className="slop-card-link" onClick={stop} onTouchEnd={stop}>{label}</a>;
  };

  return (
    <div
      className={`slop-card${isFlipped ? ' flipped' : ''}${placeholder ? ' slop-placeholder' : ''}`}
      style={{ ...style, transform, '--card-radius': radius }}
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
            {/\.webm$/.test(image)
              ? <video src={image} autoPlay loop muted playsInline className="slop-card-img" />
              : <img src={image} alt={alt} loading="lazy" className="slop-card-img" width="260" height="340" />
            }
            <h3 className="slop-title-overlay">{title}</h3>
          </>
        )}
      </div>

      <div className="slop-card-back" onClick={() => setIsFlipped(false)}>
        <div className="slop-card-back-inner">
          {badge && <span className="slop-badge">{badge}</span>}
          <h3 className="slop-card-title-back">{title}</h3>
          {Array.isArray(caption)
            ? <ul className="slop-card-caption slop-card-caption-list">{caption.map((item, i) => <li key={i}>{item}</li>)}</ul>
            : <p className="slop-card-caption">{caption}</p>}
          {renderLink(link, cta)}
          {renderLink(link2, cta2)}
        </div>
      </div>
    </div>
  );
};

export default SlopCard;
