'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { THEME_MODE } from '../themeMode';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

// Neobrutalist mode: one light-bg color is picked at random per browser session
// and persisted in sessionStorage so it stays consistent until the session ends.
// The matching token sets live in index.css under [data-mode="neobrutalist"]...
// Classic mode ignores all of this and uses the original tan light bg.
const LIGHT_PALETTES = ['mint', 'pink', 'yellow', 'cobalt'];
const PALETTE_BG = {
    mint:   '#5DE8A8',
    pink:   '#FF5C8A',
    yellow: '#FFE14D',
    cobalt: '#3D5AFE',
};
const CLASSIC_LIGHT_BG = '#f2f0e8';
const DARK_BG = '#06060c';

const getSessionPalette = () => {
    try {
        let p = sessionStorage.getItem('lightPalette');
        if (!p || !LIGHT_PALETTES.includes(p)) {
            p = LIGHT_PALETTES[Math.floor(Math.random() * LIGHT_PALETTES.length)];
            sessionStorage.setItem('lightPalette', p);
        }
        return p;
    } catch {
        return 'mint';
    }
};

// Background color the body should use for the current theme, honoring the mode.
const lightBgFor = (palette) =>
    THEME_MODE === 'neobrutalist' ? PALETTE_BG[palette] : CLASSIC_LIGHT_BG;

export const ThemeProvider = ({ children }) => {
    const mediaQueryRef = useRef(null);

    const [palette, setPalette] = useState(getSessionPalette);

    // Drives all CSS gating: [data-mode] picks classic vs neobrutalist token sets,
    // [data-palette] (neobrutalist only) picks which bright color this session.
    // Guarded for SSR (static export) where document is unavailable.
    const applyAttrs = (dark) => {
        if (typeof document === 'undefined') return;
        const el = document.documentElement;
        el.setAttribute('data-mode', THEME_MODE);
        el.setAttribute('data-theme', dark ? 'dark' : 'light');
        if (THEME_MODE === 'neobrutalist') {
            el.setAttribute('data-palette', palette);
        } else {
            el.removeAttribute('data-palette');
        }
        document.body.style.backgroundColor = dark ? DARK_BG : lightBgFor(palette);
    };

    // Start light on the server-rendered HTML; the real preference is read and
    // applied in the effect below once we're in the browser.
    const [isDark, setIsDark] = useState(false);

    // The inline pre-paint script in app/layout.jsx has already set the correct
    // theme attributes and body background before hydration. Skip the first
    // applyAttrs run so we don't overwrite it with the stale isDark=false before
    // the media query is read below (which would flash light for dark users).
    const firstApply = useRef(true);

    useEffect(() => {
        if (!mediaQueryRef.current) {
            mediaQueryRef.current = window.matchMedia('(prefers-color-scheme: dark)');
        }
        setIsDark(mediaQueryRef.current.matches);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (firstApply.current) {
            firstApply.current = false;
            return;
        }
        applyAttrs(isDark);
    }, [isDark, palette]);

    useEffect(() => {
        if (!mediaQueryRef.current) {
            mediaQueryRef.current = window.matchMedia('(prefers-color-scheme: dark)');
        }
        const mq = mediaQueryRef.current;
        const handler = (e) => setIsDark(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    // Cycle to the next light palette. The home-page DC tile triggers this
    // (only in neobrutalist + light mode); persists for the rest of the session.
    const cyclePalette = () => {
        setPalette((prev) => {
            const i = LIGHT_PALETTES.indexOf(prev);
            const next = LIGHT_PALETTES[(i + 1) % LIGHT_PALETTES.length];
            try { sessionStorage.setItem('lightPalette', next); } catch (_) {}
            return next;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, palette, mode: THEME_MODE, cyclePalette }}>
            {children}
        </ThemeContext.Provider>
    );
}; 