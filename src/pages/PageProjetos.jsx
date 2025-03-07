import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import EnglobaTitulo from "../componentes/EnglobaTitulo";
import DivComponent from "../componentes/DivComponent";
import { IoClose } from "react-icons/io5";

const projetos = [
    { nome: "Keychain ERP", texto: "Sistema de gestão de vendas com dashboards, cadastro de produtos e clientes, controle de estoque e análise de metas.", tecnologias: ["React", "Firebase", "Mui", "Recharts"], img: "/imagens/erp.png", site: "https://keychain-erp.vercel.app/", git: "https://github.com/juliapalmacunha/Keychain-ERP" },
    { nome: "Delivery Burguer", texto: "Plataforma de delivery com cardápio online, carrinho de compras e finalização direta via WhatsApp.", tecnologias: ["Javascript", "Html", "Tailwindcss"], img: "/imagens/delivery.png", site: "https://projeto-delivery-pi.vercel.app/", git: "https://github.com/juliapalmacunha/Projeto-delivery" },
    { nome: "Jogo Educativo", texto: "Jogo interativo para ensinar inglês a crianças com feedback positivo e pronúncia dos nomes dos animais.", tecnologias: ["Javascript", "Html", "Css"], img: "/imagens/jogo.png", site: "https://jogo-educativo-sigma.vercel.app/", git: "https://github.com/juliapalmacunha/jogo-educativo" },
];

export default function Projetos() {

    const [ativo, setAtivo] = useState(null);

    const [divProjeto, setDivProjeto] = useState(false)
    const [projetoAtual, setProjetoAtual] = useState([])



    const sobreProjeto = (projeto) => {
        setProjetoAtual(projeto)
        setDivProjeto((prev) => !prev);
    }

    const cliqueFora = (e) => {
        const id = e.target.id
        if(id === "fundoOpaco"){
            setDivProjeto((prev) => !prev);  
        }
    }

    return (
        <section className="min-h-screen text-white m-[20px] font-poppinsRegular" id="projetos">
            <EnglobaTitulo>Projetos</EnglobaTitulo>

            <p className="mb-[40px]">Passe o mouse ou clique para mais detalhes:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {projetos.map((projeto, index) => (
                    <motion.div
                        key={projeto.nome}
                        className="p-0 bg-[#1A1A2E] rounded-3xl shadow-lg border-[8px] border-gray-500 overflow-hidden cursor-pointer"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                        onClick={() => setAtivo(ativo === index ? null : index)}
                    >
                        <div className="relative w-full h-[300px] overflow-hidden group">
                            <img
                                src={projeto.img}
                                alt={projeto.nome}
                                className={`w-full h-full object-cover transition-all duration-300
                                    ${ativo === index ? "brightness-50 blur-sm" : "group-hover:brightness-50 group-hover:blur-sm"}`}
                            />

                            <div className={`absolute inset-0 flex justify-center items-center text-white 
                                transition-opacity duration-300 ${ativo === index ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                                <div className="gap-[10px] mb-[30px] pt-4 w-full flex flex-col justify-center items-center">

                                    <span className="flex hover:text-[#d8acff]">
                                        <FaGithub className="mt-[5px] mr-[8px]" />
                                        <a href={projeto.git} target="_blank" rel="noopener noreferrer">Github</a>
                                    </span>

                                    <span className="flex hover:text-[#d8acff]">
                                        <FaArrowUpRightFromSquare className="mt-[5px] mr-[8px]" />
                                        <a href={projeto.site} target="_blank" rel="noopener noreferrer">Visitar</a>
                                    </span>

                                    <button
                                        onClick={() => sobreProjeto(projeto)}
                                        className="mt-[10px] text-white flex items-center justify-center bg-amber-50 rounded-[10px] h-[30px] w-[160px] 
                                        font-poppinsRegular bg-gradient-to-r from-[#7b2cbf] to-[#f9c5e3] 
                                        hover:bg-gradient-to-r hover:from-[#5a1a9f] hover:to-[#e0a7c2]">
                                        <p>About Project</p>
                                    </button>

                                </div>
                            </div>

                        </div>

                    </motion.div>
                ))}
            </div>


            {divProjeto && (
                <div 
                onClick={(e) => cliqueFora(e)}
                id="fundoOpaco"
                className="fixed inset-0 bg-[#000000b4] backdrop-blur-sm z-200 flex justify-center items-center ">

                    <motion.div
                        initial={{ opacity: 0, y: -200 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center justify-center "

                    >
                        <div className="fixed bg-[#ffffff] p-6 rounded-lg z-50 lg:w-[800px] lg:h-[400px] w-[370px] h-[400px] text-black">


                            <div className="flex font-poppinsSemibold text-[30px] items-center justify-between py-5  " >

                                <div>
                                    <p> {projetoAtual.nome} </p>
                                    <div className="top-0 left-0 w-[100px] h-[1.8px] bg-gradient-to-r from-[#7b2cbf] to-[#f9c5e3] brightness-125"></div>
                                </div>
                                <button onClick={sobreProjeto} className="group">
                                    <IoClose size="30px" className="text-purple-600 group-hover:text-[#724c79]" />
                                </button>

                            </div>


                            <div className=" h-[300px] w-full " >
                                <DivComponent tecnologias={projetoAtual.tecnologias} texto={projetoAtual.texto} />
                            </div>

                        </div>


                    </motion.div>
                </div>
            )}




        </section>
    );
}
