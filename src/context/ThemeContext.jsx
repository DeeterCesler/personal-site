import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const mediaQueryRef = useRef(null);
    if (!mediaQueryRef.current) {
        mediaQueryRef.current = window.matchMedia('(prefers-color-scheme: dark)');
    }

    const [isDark, setIsDark] = useState(() => {
        const prefersDark = mediaQueryRef.current.matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        document.body.style.backgroundColor = prefersDark ? '#06060c' : '#f2f0e8';
        return prefersDark;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        document.body.style.backgroundColor = isDark ? '#06060c' : '#f2f0e8';
    }, [isDark]);

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
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 