import React from 'react'

const Cabecalho = () => {

    const setores = [
        { nome: "sobre" },
        { nome: "projetos" },
        { nome: "habilidades" },
        { nome: "contato" },

    ]


    return (

        <div className='flex fixed justify-between items-center top-0 left-0 h-[80px] w-full bg-[#1A1A2E] font-codeRegular text-[14px] z-50 '>

            <p className='text-black-500 ml-[100px]  text-[25px]' > Júlia Palma Cunha </p>

            <nav className='flex justify-between mr-[100px] ' >
                <ul className='flex space-x-4 '>

                    {setores.map((setor) => {
                        return <li key={setor.nome} >
                            <a
                                className='no-underline scroll-smooth'
                                href={`#${setor.nome}`}
                            >
                                {setor.nome}
                            </a>
                        </li>
                    })}
                </ul>
            </nav>




        </div>
    )
}

export default Cabecalho