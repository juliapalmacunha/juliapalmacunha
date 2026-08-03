import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === "pt" ? "en" : "pt"
    );
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}