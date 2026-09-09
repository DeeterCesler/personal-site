'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import { useContact } from '@/context/ContactContext';
import { ROUTE_SEO } from '@/seo/routes';
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
  const pathname = usePathname();
  const { t } = useTranslation();
  const { isDark, toggleTheme, mode, cyclePalette } = useTheme();
  const { openContact } = useContact();

  // On the home page in neobrutalist mode, clicking the DC tile cycles the
  // palette instead of navigating (it's already a no-op link to "/").
  // Light: the whole scheme shifts. Dark: only the heading drop-shadow accent.
  const handleWordmarkClick = (e) => {
    if (mode === 'neobrutalist') {
      e.preventDefault();
      cyclePalette();
    }
  };

  useEffect(() => {
    setNotHome(
      pathname !== '/' &&
      pathname !== '/index' &&
      pathname !== '/index.html'
    );
  }, [pathname]);

  // Always one level up the path, never window.history: popping history sent
  // you back to wherever you happened to come from, which is not "up".
  // Parents that aren't real routes (e.g. /harmonize above /harmonize/privacy)
  // fall through to home rather than to a 404.
  const parentOf = (path) => {
    const trimmed = path.replace(/\/+$/, '');
    const parent = trimmed.slice(0, trimmed.lastIndexOf('/'));
    return parent && parent in ROUTE_SEO ? parent : '/';
  };

  return (
    <>
      <nav className="site-nav">
        <div className="nav-inner">
          <div className="nav-left">
            {notHome ? (
              <Link href={parentOf(pathname)} className="nav-back">
                ← {t('nav.back')}
              </Link>
            ) : (
              <Link href="/" className="nav-wordmark" onClick={handleWordmarkClick}>DC</Link>
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
