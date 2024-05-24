import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as locales from './locales/index'

i18n
  .use(initReactI18next) 
  .init({
    resources: {
        ...Object.entries(locales).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: {
              translation: value
            }
          }),
          {}
        )
      },
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
