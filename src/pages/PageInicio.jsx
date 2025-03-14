import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed * 1000);

      return () => clearTimeout(timeout);
    } else {
      setIsTypingDone(true); 
    }
  }, [displayedText, index, text, speed]);

  return (
    <motion.span className="font-mono lg:text-[24px] text-[20px] border-b-4 border-purple-500">
      {displayedText}
    
      {isTypingDone && (
        <motion.span
          className="inline-block w-[3px] h-[20px] bg-white ml-1" 
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
      )}
    </motion.span>
  );
};

const Inicio = () => {
  return (

    <div className="flex">
      <div className="flex-1 flex pt-[350px] items-center justify-center w-[100%] h-[650px]">
        <div className="text-center pb-[200px]">
          <h1 className="font-poppinsSemibold lg:text-[80px] text-[40px] bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Julia Palma Cunha
          </h1>

          <p className="font-codeRegular lg:text-[24px] text-[20px] ">
            Desenvolvedora <TypingEffect text="Front-end" speed={0.1} />
          </p>

         
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://github.com/juliapalmacunha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full  text-white transition-all duration-300 hover:bg-purple-500"
            >
              <FaGithub size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/julia-palma-cunha/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full  text-white transition-all duration-300 hover:bg-purple-500"
            >
              <FaLinkedin size={25} />
            </a>
            <a
              href="https://www.instagram.com/_juliaapalma"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full  text-white transition-all duration-300 hover:bg-purple-500"
            >
              <FaInstagram size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
