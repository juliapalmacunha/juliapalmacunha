import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMenu, IoClose } from "react-icons/io5";
import { useLanguage } from "../../context/useLanguage.js";

export function Header() {
  const { language, toggleLanguage } = useLanguage();

  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: language === "pt" ? "Sobre" : "About",
      id: "about",
    },
    {
      name: language === "pt" ? "Projetos" : "Projects",
      id: "projects",
    },
    {
      name: language === "pt" ? "Contato" : "Contact",
      id: "contact",
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className="
        fixed 
        top-0 
        left-0 
        w-full 
        h-[65px]
        bg-[#020407]/80
        backdrop-blur-md
        border-b 
        border-gray-900
        z-50
        flex 
        items-center 
        justify-center
        font-codeRegular
        text-[14px]
      "
    >
      <div
        className="
          w-full 
          max-w-5xl 
          mx-auto 
          px-6 
          lg:px-8
          flex 
          justify-between 
          items-center
        "
      >
        
        <a
          href="#home"
          className="
            text-lg
            font-bold
            bg-gradient-to-r
            from-[#c300ff]
            to-pink-500
            bg-clip-text
            text-transparent
            tracking-wider
          "
        >
          &lt;JP /&gt;
        </a>

        
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-10">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="
                    text-gray-300
                    hover:text-[#c300ff]
                    transition-colors
                    duration-200
                    tracking-wide
                    uppercase
                    text-xs
                    font-semibold
                  "
                >
                  <span className="text-[#c300ff] mr-1">#</span>

                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
        <button
  onClick={toggleLanguage}
  type="button"
  className="
    group
    relative
    w-10
    h-10
    rounded-full
    border
    border-gray-800
    flex
    items-center
    justify-center
    hover:border-[#c300ff]
    hover:shadow-[0_0_15px_rgba(195,0,255,0.35)]
    transition-all
    duration-300
    cursor-pointer
    bg-gray-900/50
    overflow-hidden
  "
  aria-label="Change language"
>
  <motion.div
    key={language}
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.25 }}
    className="w-full h-full flex items-center justify-center p-1.5"
  >
    {language === "pt" ? (
      <img
        src="https://flagcdn.com/w40/br.png"
        alt="Bandeira do Brasil"
        className="w-full h-full object-cover rounded-full"
      />
    ) : (
      <img
        src="https://flagcdn.com/w40/us.png"
        alt="Bandeira dos EUA"
        className="w-full h-full object-cover rounded-full"
      />
    )}
  </motion.div>

  <span
    className="
      absolute
      top-11
      scale-0
      group-hover:scale-100
      transition-transform
      bg-[#111]
      border
      border-gray-800
      text-gray-300
      text-[10px]
      px-2
      py-1
      rounded-md
      whitespace-nowrap
      z-50
    "
  >
    {language === "pt" ? "English" : "Português"}
  </span>
</button>

          
          <button
            className="
              lg:hidden
              p-2
              text-white
              hover:text-[#c300ff]
              transition-colors
            "
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <IoClose size={26} /> : <IoMenu size={26} />}
          </button>
        </div>
      </div>

      

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              absolute
              top-[70px]
              left-0
              w-full
              bg-[#020407]/95
              backdrop-blur-xl
              border-b
              border-gray-800
              shadow-2xl
              py-6
              lg:hidden
            "
          >
            <ul
              className="
                flex
                flex-col
                items-center
                space-y-5
              "
            >
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="
                      text-gray-300
                      hover:text-[#c300ff]
                      transition-colors
                      text-sm
                      uppercase
                      tracking-wider
                      font-semibold
                    "
                  >
                    <span className="text-[#c300ff] mr-1.5">#</span>

                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
