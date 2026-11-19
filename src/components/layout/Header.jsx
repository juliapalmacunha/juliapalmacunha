import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../../context/useTheme.js";
import { useContent } from "../../context/useContent.js";

export function Header() {
  const { t, language, toggleLanguage } = useContent();
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const themeLabel = theme === "dark" ? t.themeLight : t.themeDark;
  const themeButton = (
    <button type="button" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel} className="text-soft hover:text-ink">
      {theme === "dark" ? <FiSun size={16} /> : <FiMoon size={16} />}
    </button>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#inicio" className="text-[15px] font-semibold">
          Julia Palma Cunha
        </a>

        <nav className="hidden items-center gap-7 text-sm text-body md:flex">
          {t.nav.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-ink">
              {item.label}
            </a>
          ))}
          <a href={t.links.resume} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
            {t.resumeLabel}
          </a>
          <button type="button" onClick={toggleLanguage} aria-label={t.languageLabel} className="font-mono text-xs text-soft hover:text-ink">
            {language === "pt" ? "EN" : "PT"}
          </button>
          {themeButton}
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          {themeButton}
          <button type="button" onClick={toggleLanguage} aria-label={t.languageLabel} className="font-mono text-xs text-soft">
            {language === "pt" ? "EN" : "PT"}
          </button>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            {open ? <IoClose size={22} /> : <IoMenu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-rule bg-paper px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-body">
            {t.nav.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={t.links.resume} target="_blank" rel="noopener noreferrer">
                {t.resumeLabel}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;