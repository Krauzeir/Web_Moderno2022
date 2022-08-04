import React from 'react'
import ReactDOM from 'react-dom'
/* import Saudacao from './components/Saudacao' */
/* import Multiplos, { BoaNoite } from './components/Multiplos' */
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    /* Multiplos Componentes
    <div>
        <Multiplos.BoaTarde nome="Guilherme" idade={10}/>
        <BoaNoite nome="Pedrinho" idade={10}/>
    </div>*/


    /* Trabalhando com Eventos 
    <div>
        <Saudacao tipo="Bom dia" nome="João" />
    </div> */

    /* Conceitos sobre children */
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" sobrenome="Silva" />
            <Filho nome="Paulo" sobrenome="Silva" />
            <Filho nome="Carla" sobrenome="Silva" />
        </Pai>

        
        <Pai nome="Bruno" sobrenome="Sacramento">
            <Filho nome="Luna"/>
            <Filho nome="Matheus"/>
            <Filho />
        </Pai> 
    </div>, document.getElementById('root'))



