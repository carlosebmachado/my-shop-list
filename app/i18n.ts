import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

const resources = {
  en: { translation: en },
  pt: { translation: pt },
};

i18n
// .use(LanguageDetector)
.use(initReactI18next)
.init({
  resources,
  lng: Localization.getLocales()[0].languageCode || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
