import React from 'react'
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMui, SiStyledcomponents, SiFirebase, SiTypescript } from "react-icons/si";
import { FaFileDownload } from "react-icons/fa";
import EnglobaTitulo from '../componentes/EnglobaTitulo';

const Apresentacao = () => {
  const logos = [
    { nome: "HTML"},
    { nome: "CSS"},
    { nome: "JavaScript" },
    { nome: "React"},
    { nome: "TypeScript" },
    { nome: "C++" },
    { nome: "TailwindCSS"},
    { nome: "Material UI" },
    { nome: "Styled Components" },
    { nome: "Node.js"},
    { nome: "Firebase" },
    { nome: "Git" },
    { nome: "GitHub"  }
  ];

  return (

    <section 
      className="flex justify-start text-white m-[20px] font-poppinsRegular space-x-[150px] items-center"
      id="sobre"
    >
     
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <EnglobaTitulo>
          Sobre mim
        </EnglobaTitulo>

        <div className="w-[500px]">
          <p>Lorem ipsum dolor sit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium tempore ducimus voluptas quos in quia culpa laboriosam eius. Alias nulla facilis sequi praesentium, dolore debitis voluptas quaerat ab voluptates fugiat..</p>
          <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat excepturi accusamus, consequuntur reiciendis sapiente ipsa sunt soluta optio harum provident, exercitationem nulla quibusdam distinctio quae. Tempora veniam saepe harum earum! ..</p>
        </div>
      </motion.div>

    
      <motion.div
        className="h-full"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap gap-1 m-[10px] justify-start pt-16">
          {logos.map((logo, index) => (
            <motion.div 
              key={logo.nome} 
              className="flex mt-[0px] mb-[0px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span>
                <IoMdArrowDropright color="#c300ff" className="mt-[5px]" />
              </span>
              <p>{logo.nome}</p>
            </motion.div>
          ))}
        </div>

        
        <motion.div 
          className="h-[150px] ml-[10px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        >
          <p className="pt-18">Quer saber mais sobre minha jornada? Você pode baixar meu currículo clicando no botão abaixo.</p>

          <section className="flex justify-center items-center mt-10">
            <a href="/curriculo.pdf" download className="relative inline-block px-6 py-3 rounded-lg font-bold bg-[#c300ff] text-black overflow-hidden group">
              <span className="absolute inset-0 w-full h-full bg-[#7f5c97] transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 ease-in-out"></span>
              <span className="relative z-40  text-white flex">
                <FaFileDownload 
                className='mt-[5px] mr-[10px] '
                />
                <p>Baixar Currículo</p>
                </span>
            </a>
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Apresentacao;
