import { useState } from 'react'

import './App.css'
import Apresentacao from './pages/PageApresentacao'
import Cabecalho from './componentes/Cabecalho'
import Projetos from './pages/PageProjetos'
import Habilidades from './pages/PageHabilidades'
import Divisor from './componentes/Divisor'
import Contato from './pages/PageContato'

function App() {

  return (

    
    <div id='divApp' >

     

      <Cabecalho />

      <main className='ml-[200px] mr-[200px] w-[full] ' >

        
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
