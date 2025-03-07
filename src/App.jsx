import { useState } from 'react'

import './App.css'
import Apresentacao from './pages/PageApresentacao'
import Cabecalho from './componentes/Cabecalho'
import Projetos from './pages/PageProjetos'
import Habilidades from './pages/PageHabilidades'
import Divisor from './componentes/Divisor'
import Contato from './pages/PageContato'
import Certificados from './pages/Certificados'

function App() {

  return (

    
    <div id='divApp' >

     

      <Cabecalho />

      <main className='w-[85%]  m-auto lg:w-[calc(100%-200px)] lg:ml-[100px] lg:mr-[100px]'>

        
        <div className='h-[180px] w-full ' ></div>

        <Apresentacao/>
        <Divisor/>
        <Projetos/>
        <Divisor/>
        <Habilidades/>
        <Divisor/>
        <Contato/>




      </main>

      

      </div>

  )
}

export default App
