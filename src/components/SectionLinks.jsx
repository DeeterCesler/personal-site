import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SectionLinks.css';

const links = [
  { key: 'internalLinks.now', to: '/now' },
  { key: 'internalLinks.work', to: '/work' },
  { key: 'internalLinks.blog', to: '/blog' },
];

const TrashIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);

const SectionLinks = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState({ active: false, x: '50%', y: '50%' });
  const navTimerRef = useRef(null);

  useEffect(() => () => clearTimeout(navTimerRef.current), []);

  const handleClick = () => {
    if (navigator.vibrate) {
      try { navigator.vibrate(200); } catch (_) {}
    }
  };

  const handleTrashClick = (e) => {
    const x = `${e.clientX}px`;
    const y = `${e.clientY}px`;
    setOverlay({ active: true, x, y });
    clearTimeout(navTimerRef.current);
    navTimerRef.current = setTimeout(() => navigate('/slop'), 520);
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
            <span className="trash-icon"><TrashIcon /></span>
          </span>
          <span className="section-link-arrow">→</span>
        </button>
      </nav>
    </>
  );
};

export default SectionLinks;
