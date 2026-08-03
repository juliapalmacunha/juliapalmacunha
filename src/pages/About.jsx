import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import TitleWrapper from "../components/ui/TitleWrapper";
import { languages } from "../data/index.js";
import { useLanguage } from "../context/useLanguage.js";

export function About() {
  const { language } = useLanguage();

  const { personalInfo, skills, bestPractices, titleSections } =
    languages[language];

  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto text-white py-6 px-6 lg:px-8 font-poppinsRegular pt-[40px] min-h-screen scroll-mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TitleWrapper>{titleSections.about}</TitleWrapper>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-5 items-start">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-justify leading-relaxed flex flex-col gap-3"
        >
          {personalInfo.aboutParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}

          <motion.div
            className="bg-[#1a1a1a] p-4 rounded-xl border border-gray-800 shadow-lg mt-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 mb-4 text-sm lg:text-base">
              {personalInfo.resumeDescription}
            </p>

            <a
              href={personalInfo.resumeUrl}
              download
              className="relative inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 rounded-lg font-bold bg-[#c300ffb4] text-white overflow-hidden group transition-all"
            >
              <span className="absolute inset-0 w-full h-full bg-[#9b00cc] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></span>

              <span className="relative z-10 flex items-center gap-2 text-sm font-medium">
                <FaFileDownload className="text-base" />
                <span>{personalInfo.resumeTitle}</span>
              </span>
            </a>
          </motion.div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col gap-5"
        >
          <div className="flex flex-col gap-4">
            {skills.map((category, idx) => (
              <div key={category.title}>
                <h3 className="text-gray-500 font-semibold text-xs uppercase tracking-widest mb-3">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.items.map((tech, index) => {
                    const Icon = tech.icon;

                    return (
                      <motion.div
                        key={tech.name}
                        className="flex items-center gap-2.5 bg-[#1a1a1a]/60 border border-gray-800 px-3 py-2 rounded-lg hover:border-gray-600 transition-colors"
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.1 + index * 0.05,
                        }}
                        viewport={{ once: true }}
                      >
                        <Icon
                          className="text-[18px] flex-shrink-0"
                          color={tech.color}
                        />

                        <span className="text-white font-medium text-[13px] lg:text-[14px] leading-tight">
                          {tech.name}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}

            <div>
              <h3 className="text-gray-500 font-semibold text-xs uppercase tracking-widest mb-3">
                Boas práticas
              </h3>

              <div className="flex flex-wrap gap-2">
                {bestPractices.map((item) => (
                  <span
                    key={item}
                    className="text-[12px] lg:text-[13px] text-gray-400 border border-gray-700/50 bg-[#1a1a1a]/30 rounded-full px-3 py-1.5 hover:border-[#c300ff] hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
