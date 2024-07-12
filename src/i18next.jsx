import i18n, { use } from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import backend from "i18next-http-backend";
import languageDetector from "i18next-browser-languagedetector";

// languages
import en from "../public/langauges/en.json";
import ru from "../public/langauges/ru.json";

i18n
  .use(backend)
  // detect language
  .use(languageDetector)
  // connect i18next with react
  .use(initReactI18next)
  .init({
    fallback: "en",
    lang: "en",
    debug: true,
    resources: {
      en: {
        translation: en,
      },
      ru: {
        translation: ru,
      },
    },
  });

export default i18n;
