import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en.json';
// otras traducciones
import deTranslations from './locales/de.json';
import esTranslations from './locales/es.json';
import frTranslations from './locales/fr.json';
import koTranslations from './locales/ko.json';
import jaTranslations from './locales/ja.json';
import zhTranslations from './locales/zh.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      es: {
        translation: esTranslations
      },
      zh: {
        translation: zhTranslations
      },
      fr: {
        translation: frTranslations
      },
      ko: {
        translation: koTranslations
      },
      ja: {
        translation: jaTranslations
      },
      de: {
        translation: deTranslations
      }
    },
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

// Add helper function to change language
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng);
};

export default i18n; 