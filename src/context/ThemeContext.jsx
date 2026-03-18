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
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
        // Set immediately to prevent FOUC before first render
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        document.body.style.backgroundColor = prefersDark ? '#06060c' : '#f2f0e8';
        return prefersDark;
    });

    useEffect(() => {
        const theme = isDark ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        document.body.style.backgroundColor = isDark ? '#06060c' : '#f2f0e8';
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 