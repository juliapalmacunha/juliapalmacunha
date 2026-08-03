import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCopy,
  FaCheck,
} from "react-icons/fa";
import { personalInfo } from "../data/portfolioData.pt";
import TitleWrapper from "../components/ui/TitleWrapper";
import { languages } from "../data/index.js";
import { useLanguage } from "../context/useLanguage.js";

export function Contact() {
  const { language } = useLanguage();
  const {descriptionSections, titleSections} = languages[language];

  const [copied, setCopied] = useState(false);

  const timeoutRef = useRef(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const contactCards = [
    {
      id: "email",
      title: "E-mail",
      description: personalInfo.email,
      icon: FaEnvelope,
      glowClass: "bg-[#c300ff]",
      textClass: "text-[#c300ff]",
      hoverBorderClass: "hover:border-[#c300ff]",
      hoverFooterClass: "hover:text-[#c300ff]",
      delay: 0,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      description: "Conecte-se comigo profissionalmente.",
      icon: FaLinkedin,
      link: personalInfo.socialLinks.linkedin,
      footerText: "Acessar Perfil →",
      glowClass: "bg-[#0a66c2]",
      textClass: "text-[#0a66c2]",
      hoverBorderClass: "hover:border-[#0a66c2]",
      hoverFooterClass: "hover:text-[#0a66c2]",
      delay: 0.15,
    },
    {
      id: "github",
      title: "GitHub",
      description: "Explore meus repositórios e códigos.",
      icon: FaGithub,
      link: personalInfo.socialLinks.github,
      footerText: "Ver Repositórios →",
      glowClass: "bg-white",
      textClass: "text-white",
      hoverBorderClass: "hover:border-white",
      hoverFooterClass: "hover:text-white",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full max-w-5xl mx-auto text-white py-12 px-6 lg:px-8 mb-35 pt-[75px] font-poppinsRegular"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TitleWrapper>{titleSections.contact}</TitleWrapper>
      </motion.div>

      <p className="text-gray-400 mt-4 mb-8 text-sm lg:text-base">
        {descriptionSections.contact}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactCards.map((card) => {
          const isEmail = card.id === "email";

          const CardComponent = isEmail ? motion.button : motion.a;

          const Icon = card.icon;

          return (
            <CardComponent
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: card.delay,
              }}
              onClick={isEmail ? handleCopyEmail : undefined}
              href={!isEmail ? card.link : undefined}
              target={!isEmail ? "_blank" : undefined}
              rel={!isEmail ? "noopener noreferrer" : undefined}
              className={`
                bg-[#1a1a1a]
                border border-gray-800
                p-6
                rounded-2xl
                shadow-lg
                flex
                flex-col
                justify-between
                transition-all
                duration-300
                relative
                overflow-hidden
                text-left
                w-full
                ${card.hoverBorderClass}
              `}
            >
              
              <div
                className={`
                  absolute
                  top-0
                  right-0
                  w-24
                  h-24
                  rounded-full
                  blur-[60px]
                  opacity-10
                  pointer-events-none
                  ${card.glowClass}
                `}
              />

              <div>
                
                <div
                  className={`
                    w-12
                    h-12
                    rounded-xl
                    bg-[#141414]
                    border
                    border-gray-800
                    flex
                    items-center
                    justify-center
                    mb-4
                    transition-transform
                    duration-300
                    hover:scale-110
                    ${card.textClass}
                  `}
                >
                  <Icon size={22} />
                </div>

                <h3 className="font-poppinsSemibold text-lg text-white mb-1">
                  {card.title}
                </h3>

                
                <p
                  className="
                    text-gray-400
                    text-xs
                    lg:text-sm
                    break-words
                    whitespace-normal
                  "
                >
                  {card.description}
                </p>
              </div>

              
              <div
                className={`
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  text-xs
                  font-semibold
                  text-gray-300
                  transition-colors
                  duration-300
                  ${card.hoverFooterClass}
                `}
              >
                {isEmail ? (
                  copied ? (
                    <>
                      <FaCheck className="text-green-400" size={14} />
                      <span className="text-green-400">E-mail copiado!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy size={14} />
                      <span>Clique para copiar</span>
                    </>
                  )
                ) : (
                  <span>{card.footerText}</span>
                )}
              </div>
            </CardComponent>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
