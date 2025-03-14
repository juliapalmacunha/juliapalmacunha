import React, { useState } from 'react';
import EnglobaTitulo from '../componentes/EnglobaTitulo';

const Contato = () => {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

 
  const handleSendEmail = (e) => {
    e.preventDefault();

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=juliapcunha13@gmail.com&su=${encodeURIComponent(
      'Contato de ' + nome
    )}&body=${encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\n\nMensagem:\n${mensagem}`
    )}`;

    window.open(gmailLink, '_blank');
  };


  const estilizandoInputs = "bg-[#d6d6d6dd] p-[10px] w-full rounded-[5px] h-[45px] placeholder:text-[#4c4848]"

  return (

    <section className='text-white m-[20px] mb-[80px] font-poppinsRegular'
    id='contato'
    >
      <EnglobaTitulo>Contato</EnglobaTitulo>

      <div className='w-full h-[500px] lg:w-[50%] '>
        <form
          className='flex flex-col gap-[12px] text-start lg:p-[30px] w-full h-full'
          onSubmit={handleSendEmail}
        >
          <div>
            <label htmlFor='nome'>Nome</label>
            <input
              type='text'
              id='nome'
              name='nome'
              required
              className={estilizandoInputs}
              placeholder='Nome'
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className= {estilizandoInputs}
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor='mensagem'>Mensagem:</label>
            <textarea
              id='mensagem'
              name='mensagem'
              rows='4'
              className='bg-[#d6d6d6dd] p-[10px] w-full h-[200px] rounded-[10px] placeholder:text-[#4c4848]'
              placeholder='Mensagem'
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
            ></textarea>
          </div>

          <button
            type='submit'
            className='bg-gradient-to-r from-[#7b2cbf] to-[#f9c5e3] rounded-[5px] w-full h-[40px]  hover:bg-gradient-to-r hover:from-[#5a1a9f] hover:to-[#e0a7c2] '
          >
            Enviar
          </button>
        </form>
      </div>

    </section>
  );
};

export default Contato;
