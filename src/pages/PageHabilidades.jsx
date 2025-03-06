import React from 'react'
import EnglobaTitulo from '../componentes/EnglobaTitulo';
import { motion } from "framer-motion";

const PageHabilidades = () => {

    const habilidades = [
        {
            num: "01",
            nome: "Inteligência Emocional",
            texto: "Saber lidar com pressão e feedbacks torna os desafios mais fáceis de enfrentar e mantém minha produtividade.",
            cor: "#7b2cbf"
        },
        {
            num: "02",
            nome: "Gestão de Tempo",
            texto: "Organizar bem meu tempo me ajuda a cumprir prazos sem pressa e ainda ter espaço para aprender e melhorar.",
            cor: "#7f5c97"
        },
        {
            num: "03",
            nome: "Trabalho em Equipe",
            texto: "Colaborar e trocar conhecimento com o time faz toda a diferença para encontrar soluções melhores e evoluir sempre.",
            cor: "#f9c5e3"
        }
    ];





    return (




        <section className=" text-white m-[20px] font-poppinsRegular lg:h-[350px] h-[850px] "
            id='habilidades'
        >





            <EnglobaTitulo>
                Habilidades
            </EnglobaTitulo>


            <div className='mt-[100px] w-full h-[200px] flex flex-wrap  justify-center lg:justify-between text-white gap-[50px] ' >

                {habilidades.map((habilidade) => {
                    return <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        viewport={{ once: true }}


                    >
                        <div key={habilidade.nome} className=' w-[380px] lg:w-[320px] h-[250px] rounded-lg font-codeSemibold text-[28px] overflow-hidden 
                    bg-[#ffffff00] hover:bg-[#beaeae95] 
                    hover:scale-110 transition-transform duration-1000 ease-in-out'
                        >
                            <div className='flex gap-[10px] '>
                                <p className='pl-[10px] ' >{habilidade.num}</p>
                                <div style={{ backgroundColor: habilidade.cor }} className=" h-[30px] w-full"></div>

                            </div>

                            <h3 className='pl-[10px] ' >{habilidade.nome}</h3>
                            <p className=' text-[16px] font-poppinsRegular mt-[16px] p-[10px] ' > {habilidade.texto} </p>

                        </div>

                    </motion.div>

                })}

            </div>







        </section>

    )
}

export default PageHabilidades