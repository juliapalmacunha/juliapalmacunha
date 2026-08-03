import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { languages } from "../data/index.js";
import { useLanguage } from "../context/useLanguage.js";

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  const isTypingDone = index >= text.length;

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed * 1000);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <motion.span className="font-mono lg:text-[26px] text-[20px] font-semibold text-white">
      {displayedText}
      {isTypingDone && (
        <motion.span
          className="inline-block w-[3px] h-[22px] bg-[#c300ff] ml-1 align-middle"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "easeInOut" }}
        />
      )}
    </motion.span>
  );
};

export function Home() {
  const iconContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.2,
        staggerChildren: 0.25,
        ease: "easeOut",
      },
    },
  };

  const iconItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const { language } = useLanguage();

  const { personalInfo } = languages[language];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center justify-center text-center">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="mb-6 px-4 py-2 font-poppinsRegular rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-gray-800 text-gray-300 text-xs lg:text-sm shadow-lg flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-[#c300ff] animate-pulse"></span>
            {personalInfo.welcomeMessage}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          >
            <h1 className="font-poppinsSemibold lg:text-[85px] text-[48px] leading-[1.1] tracking-tight bg-gradient-to-r from-[#c300ff] via-[#d84dff] to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(195,0,255,0.25)] pb-2">
              {personalInfo.name}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.8 }}
            className="mt-4 lg:mt-6 bg-[#1a1a1a]/40 border border-[#c300ff]/30 px-6 py-2 rounded-xl backdrop-blur-md shadow-[0_0_20px_rgba(195,0,255,0.08)]"
          >
            <p className="font-codeRegular lg:text-[22px] text-[18px] text-gray-300 flex items-center gap-2">
              <span className="text-gray-400">&gt;</span>

              {language === "pt" ? (
              
                <>
                  <span>{personalInfo.profession}</span>
                  <TypingEffect
                    key={language}
                    text={personalInfo.role}
                    speed={0.12}
                  />
                </>
              ) : (
               
                <>
                  <TypingEffect
                    key={language}
                    text={personalInfo.role}
                    speed={0.12}
                  />
                  <span>Developer</span>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="flex justify-center gap-6 mt-12 relative z-20"
          variants={iconContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            variants={iconItemVariants}
            whileHover={{
              scale: 1.12,
              y: -4,
              boxShadow: "0px 10px 25px rgba(195, 0, 255, 0.2)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.96 }}
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-gray-700 text-gray-300 hover:text-white hover:border-[#c300ff] transition-colors duration-300"
          >
            <FaGithub size={26} />
          </motion.a>

          <motion.a
            variants={iconItemVariants}
            whileHover={{
              scale: 1.12,
              y: -4,
              boxShadow: "0px 10px 25px rgba(10, 102, 194, 0.2)",
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            whileTap={{ scale: 0.96 }}
            href={personalInfo.socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-gray-700 text-gray-300 hover:text-[#0a66c2] hover:border-[#0a66c2] transition-colors duration-300"
          >
            <FaLinkedin size={26} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
