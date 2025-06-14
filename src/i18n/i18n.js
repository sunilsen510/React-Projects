import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../lang/en.json';
import translationAR from '../lang/ar.json';
// import translationHI from '../lang/hi.json';
// import translationCN from '../lang/cn.json';
// import translationES from '../lang/es.json';
// import translationFR from '../lang/fr.json';
// import translationRU from '../lang/ru.json';
// import translationJA from '../lang/ja.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR },
  // hi: { translation: translationHI },
  // cn: { translation: translationCN },
  // es: { translation: translationES },
  // fr: { translation: translationFR },
  // ru: { translation: translationRU },
  // ja: { translation: translationJA },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debugger: true,
    returnObjects: true,
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi', 'cn', 'de', 'es', 'fr', 'pt', 'ar', 'ru', 'ja'],
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: { escapeValue: false }
  });

export default i18n;
