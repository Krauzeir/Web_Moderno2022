import React from 'react'

/* O import abaixo está relacionado a melhor arquitetura de código, jogando a função em uma pasta chamada utils onde encontra-se a função importada para utilização nesse componente. A função é a mesma desse arquivo, 'childrenWithProps(props)' */

/* import { childrenWithProps } from '../utils/utils.js' */ 


function childrenWithProps(props) {
    {/* 'map()' em REACT é necessário que informe o array que deseja trabalhar e depois a função que alterará esses valores de acordo como deseja */}
    return React.Children.map(props.children, child => {
        {/* 'React.cloneElement()' irá clonar o elemento pai e utilizando o Spread abaixo, alteramos os valores clonados do Pai pelos parametros passados no componente Filho */}
        return React.cloneElement(child, { ...props, ...child.props })
    })
}

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {/*<Filho nome="Pedro" sobrenome={props.sobrenome} />
            <Filho {...props} /> {// Spread} 
            <Filho {...props} nome="Carla" /> */}

            <p> Utilizando children diretamente. Verificar index.js </p>
            {/* 'children', carrega os valores dos componentes filhos do compente pai. (Verificar estrutura de identação em 'index.js' */}
            {props.children} {/* Em caso de ser o export de uma classe, o correto seria 'this.props.children'  */}

            <p></p>
            
            <p> Utilizando children herdando parametros do Pai. Verificar index.js</p>
            {childrenWithProps(props)}
        </ul>
    </div>