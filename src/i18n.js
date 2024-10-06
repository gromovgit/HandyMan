import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationUa from './locales/ua/translation.json';

const resources = {
    en: {
      translation: translationEN,
    },
    ua: {
      translation: translationUa,
    },
  };

  i18n
  .use(initReactI18next) // Связывает i18n с React
  .init({
    resources,
    lng: 'en', // Язык по умолчанию
    fallbackLng: 'en', // Язык для использования, если перевод для выбранного языка отсутствует
    interpolation: {
      escapeValue: false, // Для React не нужно экранировать строки
    },
  });

export default i18n;