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
    if (!mediaQueryRef.current) {
        mediaQueryRef.current = window.matchMedia('(prefers-color-scheme: dark)');
    }

    const paletteRef = useRef(null);
    if (!paletteRef.current) {
        paletteRef.current = getSessionPalette();
    }
    const palette = paletteRef.current;

    // Drives all CSS gating: [data-mode] picks classic vs neobrutalist token sets,
    // [data-palette] (neobrutalist only) picks which bright color this session.
    const applyAttrs = (dark) => {
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

    const [isDark, setIsDark] = useState(() => {
        const prefersDark = mediaQueryRef.current.matches;
        applyAttrs(prefersDark);
        return prefersDark;
    });

    useEffect(() => {
        applyAttrs(isDark);
    }, [isDark, palette]);

    useEffect(() => {
        const mq = mediaQueryRef.current;
        const handler = (e) => setIsDark(e.matches);
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme, palette, mode: THEME_MODE }}>
            {children}
        </ThemeContext.Provider>
    );
}; 