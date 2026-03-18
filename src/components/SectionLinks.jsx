import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './SectionLinks.css';

const links = [
  { key: 'internalLinks.now', to: '/now' },
  { key: 'internalLinks.work', to: '/work' },
  { key: 'internalLinks.blog', to: '/blog' },
];

const SectionLinks = () => {
  const { t } = useTranslation();

  const handleClick = () => {
    if (navigator.vibrate) {
      try { navigator.vibrate(200); } catch (_) {}
    }
  };

  return (
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
    </nav>
  );
};

export default SectionLinks;
