import { motion } from "framer-motion";
import { MdOutlineDashboard } from "react-icons/md";
import { PiHamburger } from "react-icons/pi";
import { RiGameFill } from "react-icons/ri";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import EnglobaTitulo from "../componentes/EnglobaTitulo";

const projetos = [
    { nome: "Keychain ERP", texto: "Sistema de gestão de vendas com dashboards, cadastro de produtos e clientes, controle de estoque e análise de metas.", tecnologias: "React  Firebase  Mui  Recharts", img: "public/imagens/erp.png", site: "https://keychain-erp.vercel.app/" },
    { nome: "Delivery Burguer", texto: "Plataforma de delivery com cardápio online, carrinho de compras e finalização direta via WhatsApp.", tecnologias: "Javascript  Html  Tailwindcss", img: "public/imagens/delivery.png", site: "https://projeto-delivery-pi.vercel.app/" },
    { nome: "Jogo Educativo", texto: "Jogo interativo para ensinar inglês a crianças com feedback positivo e pronúncia dos nomes dos animais.", tecnologias: "Javascript Html  Css", img: "public/imagens/jogo.png", site: "https://jogo-educativo-sigma.vercel.app/" },
   
]

export default function Projetos() {


    const edicaoIcones = "mt-[5px] mr-[8px]"
   



    return (


        <section className="min-h-screen text-white m-[20px] font-poppinsRegular "
        id="projetos"
        >
            

            <EnglobaTitulo>
                Projetos
            </EnglobaTitulo>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 ">

                {projetos.map((projeto, index) => (

                    <motion.div
                        key={projeto.nome}
                        className="p-0 bg-[#1A1A2E] rounded-3xl shadow-lg border border-[#7b2cbf] overflow-hidden"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.3 }}
                    >

                        <div className='w-full  h-[300px] mb-[35px] m-0 p-0 text-black overflow-hidden'>
                            <img
                                src={projeto.img}
                                alt={projeto.nome}
                                className="w-full h-full object-cover  "
                            />
                        </div>


                        <div className="m-[20px] p-[10px] ">
                            <h3 className="text-xl font-bold">{projeto.nome}</h3>
                            <p className="mt-2 text-white">{projeto.texto}</p>
                        </div>


                        <div className="flex gap-[50px] mb-[30px] ml-[35px] pt-4 " >
                            <span className="flex hover:text-[#d8acff] " >
                                <FaGithub
                                className={edicaoIcones}
                                />
                                <a href={projeto.site} className="group-hover:text-gray-500 " > Github </a>
                            </span>
                            <span className="flex hover:text-[#d8acff] " >
                                <FaArrowUpRightFromSquare
                                className={edicaoIcones} 
                                />
                                <a href={projeto.site}  >Visitar</a>
                            </span>
                        </div>

                    </motion.div>
                ))}

            </div>

        </section>
    );
}
