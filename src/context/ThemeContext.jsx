import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const [isDark, setIsDark] = useState(() => {
        const prefersDark = mediaQuery.matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        document.body.style.backgroundColor = prefersDark ? '#06060c' : '#f2f0e8';
        return prefersDark;
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        document.body.style.backgroundColor = isDark ? '#06060c' : '#f2f0e8';
    }, [isDark]);

    useEffect(() => {
        const handler = (e) => setIsDark(e.matches);
        mediaQuery.addEventListener('change', handler);
        return () => mediaQuery.removeEventListener('change', handler);
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