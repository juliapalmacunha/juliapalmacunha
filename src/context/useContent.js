import { languages } from "../data/index.js";
import { useLanguage } from "./useLanguage.js";

export function useContent() {
  const { language, toggleLanguage } = useLanguage();
  return { t: languages[language], language, toggleLanguage };
}