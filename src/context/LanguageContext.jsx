import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    useEffect(() => {
        // Get browser language
        const browserLang = navigator.language || navigator.userLanguage;
        // Extract primary language code (e.g., 'en' from 'en-US')
        const primaryLang = browserLang.split('-')[0];
        
        // Set language to primary language if supported, otherwise default to English
        setLanguage(primaryLang === 'en' ? 'en' : 'en');
    }, []);

    const value = {
        language,
        setLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}; 