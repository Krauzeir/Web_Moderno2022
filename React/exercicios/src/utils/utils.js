import React from 'react'

export function childrenWithProps(props) {
    {/* 'map()' em REACT é necessário que informe o array que deseja trabalhar e depois a função que alterará esses valores de acordo como deseja */}
    return React.Children.map(props.children, child => {
        {/* 'React.cloneElement()' irá clonar o elemento pai e utilizando o Spread abaixo, alteramos os valores clonados do Pai pelos parametros passados no componente Filho */}
        return React.cloneElement(child, { ...props, ...child.props })
    })
}