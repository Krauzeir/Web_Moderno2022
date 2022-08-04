import React, { Component } from 'react'

export default class Saudacao extends Component {
    
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    constructor(props){
        super(props) /* Para utilização de constructor é necessário a utilização de 'super()'*/
        this.setNome = this.setNome.bind(this)
    }

    setTipo(e) {
        this.setState({ tipo: e.target.value})
    }

    setNome(e) {
        this.setState({ nome: e.target.value})
    }

    render() {
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <hr />
                {/*  FORMA 1 de trabalhar com eventos passando parametro('e => this.setTipo(e)'), forma direta */}
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                {/*  FORMA 2 de trabalhar com eventos passando parametro ('this.setNome'), com constructor */}
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}