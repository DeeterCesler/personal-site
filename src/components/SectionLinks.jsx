import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SectionLinks.css';

const links = [
  { key: 'internalLinks.now', to: '/now' },
  { key: 'internalLinks.work', to: '/work' },
  { key: 'internalLinks.blog', to: '/blog' },
];

const SectionLinks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState({ active: false, x: '50%', y: '50%' });

  const handleClick = () => {
    if (navigator.vibrate) {
      try { navigator.vibrate(200); } catch (_) {}
    }
  };

  const handleTrashClick = (e) => {
    const x = `${e.clientX}px`;
    const y = `${e.clientY}px`;
    setOverlay({ active: true, x, y });
    setTimeout(() => navigate('/slop'), 520);
  };

  return (
    <>
      <div
        className={`slop-overlay${overlay.active ? ' active' : ''}`}
        style={{ '--cx': overlay.x, '--cy': overlay.y }}
      />
      <nav className="section-links">
        {links.map(({ key, to }) => (
          <Link
            key={to}
            to={to}
            className="section-link-row"
            onClick={handleClick}
          >
            <span className="section-link-label">{t(key)}</span>
            <span className="section-link-arrow">→</span>
          </Link>
        ))}
        <button className="section-link-row trash-row" onClick={handleTrashClick}>
          <span className="section-link-label trash-label">
            <span className="trash-text">SLOP BIN</span>
            <span className="trash-icon">🗑️</span>
          </span>
          <span className="section-link-arrow">→</span>
        </button>
      </nav>
    </>
  );
};

export default SectionLinks;
