import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const Languages = ["tr", "en", "fr", "ru", "es"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "tr",
    whitelist: Languages,
    interpolation: {
      escapeValue: true,
    },
  });

export default i18n;
