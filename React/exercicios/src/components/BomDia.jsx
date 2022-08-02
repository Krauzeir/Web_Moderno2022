import React from 'react'

/* export default props => <><h1>Bom dia {props.nome}! Você faz {props.idade} anos</h1> <h2>Feliz Aniversário!!</h2></> */

/* export default props => [
<h1 key='h1'>Bom dia {props.nome}! Você faz {props.idade} anos</h1>, 
<h2 key='h2'>Feliz Aniversário!!</h2>
] */

export default props => 
    <div>
        <h1 key='h1'>Bom dia {props.nome}! Você faz {props.idade} anos</h1> 
        <h2 key='h2'>Feliz Aniversário!!</h2>
    </div>  