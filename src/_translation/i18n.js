import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
    en: {
        translation: {
            "Welcome to React": "Welcome to React and react-i18next"
        }
    },
    da: {
        translation: {
            "Welcome to React": "Velkommen til React og react-i18next"
        }
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    .init({
        resources,
        lng: "da", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
        // if you're using a language detector, do not define the lng option
        debug: true,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;