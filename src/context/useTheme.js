import { useEffect, useState } from "react";

// O tema inicial é definido no index.html (antes do React carregar) para não piscar.
function currentTheme() {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0e1422" : "#f7f5f0");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // sem armazenamento disponível: o tema vale só nesta visita
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  return { theme, toggleTheme };
}