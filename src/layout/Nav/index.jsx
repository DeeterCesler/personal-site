import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../context/ThemeContext';
import { useContact } from '../../context/ContactContext';
import './style.css';

const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);


const Nav = () => {
  const [notHome, setNotHome] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const { openContact } = useContact();

  useEffect(() => {
    setNotHome(
      location.pathname !== '/' &&
      location.pathname !== '/index' &&
      location.pathname !== '/index.html'
    );
  }, [location.pathname]);

  const getFallbackUrl = () =>
    location.pathname.startsWith('/blog/') ? '/blog' : '/';

  const handleBack = (e) => {
    e.preventDefault();
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate(getFallbackUrl(), { replace: true });
    }
  };

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <div className="nav-left">
            {notHome ? (
              <a href={getFallbackUrl()} onClick={handleBack} className="nav-back">
                ← {t('nav.back')}
              </a>
            ) : (
              <Link to="/" className="nav-wordmark">DC</Link>
            )}
          </div>

          <div className="nav-right">
            <button
              className="nav-icon-btn"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="nav-contact-btn" onClick={openContact}>
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Nav;
