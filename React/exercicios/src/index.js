import React from 'react'
import ReactDOM from 'react-dom'
import Multiplos, { BoaNoite } from './components/Multiplos'


ReactDOM.render(
    <div>
        <Multiplos.BoaTarde nome="Guilherme" idade={10}/>
        <BoaNoite nome="Pedrinho" idade={10}/>
    </div>, document.getElementById('root'))


