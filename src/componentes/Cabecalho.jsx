import React, { useState } from 'react';
import { IoMenu } from 'react-icons/io5';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false); 
  const setores = [
    { nome: "sobre" },
    { nome: "projetos" },
    { nome: "habilidades" },
    { nome: "contato" },
  ];

  
  const trocaMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <div className='flex fixed justify-between items-center top-0 left-0 h-[60px] w-full bg-[#020407] font-codeRegular text-[14px] z-50'>
    
      <p className='text-black-500 ml-[100px] text-[25px]'></p>

      <nav className='hidden lg:flex justify-between mr-[100px]  '>
        <ul className='flex space-x-12'>
          {setores.map((setor) => (
            <li key={setor.nome}>
              <a className='no-underline scroll-smooth' href={`#${setor.nome}`}>
                {setor.nome}
              </a>
            </li>
          ))}
        </ul>
      </nav>


      <button
        className='lg:hidden mr-[20px]'
        onClick={trocaMenu}
      >
        <IoMenu size={30} color="white" />
      </button>


      {menuAberto && (
        <nav className='absolute top-20 left-0 w-full bg-[#020407] z-40 '>
          <ul className='flex flex-col items-center space-y-4'>
            {setores.map((setor) => (
              <li key={setor.nome}>
                <a
                  className='no-underline text-white scroll-smooth'
                  href={`#${setor.nome}`}
                  onClick={() => setMenuAberto(false)} 
                >
                  {setor.nome}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Cabecalho;
