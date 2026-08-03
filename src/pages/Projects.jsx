import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import TitleWrapper from "../components/ui/TitleWrapper";
import ProjectDetails from "../components/ui/ProjectDetails";
import { languages } from "../data/index.js";
import { useLanguage } from "../context/useLanguage.js";

export function Projects() {
  const { language } = useLanguage();
  const { projects, descriptionSections, titleSections } = languages[language];

  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleCloseModal();
    };

    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject]);

  const handleOutsideClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <section
      id="projects"
      className="w-full max-w-5xl mx-auto text-white py-12 px-6 lg:px-8 pt-[75px] font-poppinsRegular scroll-mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <TitleWrapper>{titleSections.projects}</TitleWrapper>
      </motion.div>

      <p className="text-gray-400 mt-4 mb-8 text-sm lg:text-base">
        {descriptionSections.projects}
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const isActive = activeCardIndex === index;

          return (
            <motion.div
              key={project.id}
              className="relative bg-[#1a1a1a] rounded-2xl shadow-lg border border-gray-800 overflow-hidden cursor-pointer group flex flex-col justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setActiveCardIndex(isActive ? null : index)}
            >
              <div className="relative w-full h-[200px] overflow-hidden bg-[#0d0d0d]">
                <img
                  src={project.image}
                  alt={`Capa do projeto ${project.name}`}
                  className={`w-full h-full object-cover transition-all duration-500 ease-in-out ${
                    isActive
                      ? "scale-110 brightness-[0.3] blur-[2px]"
                      : "group-hover:scale-110 group-hover:brightness-[0.3] group-hover:blur-[2px]"
                  }`}
                />

                <div
                  className={`absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 backdrop-blur-sm transition-all duration-500 ease-in-out ${
                    isActive
                      ? "opacity-100 visible"
                      : "opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                  }`}
                >
                  <div className="flex flex-col gap-3 items-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex gap-4">
                        <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-gray-300 hover:text-[#c300ff] transition-colors font-medium text-xs lg:text-sm"
                      >
                        <FaGithub size={18} />
                        <span>Repositório</span>
                      </a>

                      <a
                        href={project.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 text-gray-300 hover:text-pink-500 transition-colors font-medium text-xs lg:text-sm"
                      >
                        <FaArrowUpRightFromSquare size={16} />
                        <span>Visitar</span>
                      </a>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="mt-2 relative inline-flex items-center justify-center px-5 py-2 rounded-lg font-semibold bg-[#c300ff] text-white overflow-hidden group/btn transition-all shadow-[0_0_15px_rgba(195,0,255,0.4)]"
                    >
                      <span className="absolute inset-0 w-full h-full bg-[#9b00cc] transform scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                      <span className="relative z-10 text-xs lg:text-sm">
                        Detalhes
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-gray-800 bg-[#141414]">
                <h3 className="font-semibold text-gray-200 text-base text-center truncate">
                  {project.name}
                </h3>
              </div>
            </motion.div>
          );
        })}
      </div>

      
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            onClick={handleOutsideClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex justify-center items-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-[#1a1a1a] border border-gray-700 p-6 lg:p-8 rounded-2xl shadow-2xl w-full max-w-3xl relative overflow-hidden text-white"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c300ff] rounded-full blur-[80px] opacity-20 pointer-events-none"></div>

              <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-800 relative z-10">
                <h2 className="font-poppinsSemibold text-2xl lg:text-[28px] bg-gradient-to-r from-[#c300ff] to-pink-500 bg-clip-text text-transparent">
                  {selectedProject.name}
                </h2>
                <button
                  onClick={handleCloseModal}
                  aria-label="Fechar modal"
                  className="p-2 bg-gray-800/50 hover:bg-gray-700 rounded-full transition-colors group"
                >
                  <IoClose
                    size={24}
                    className="text-gray-400 group-hover:text-white"
                  />
                </button>
              </div>

              <div className="w-full relative z-10 text-gray-300">
                <ProjectDetails
                  technologies={selectedProject.technologies}
                  description={selectedProject.text}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Projects;
