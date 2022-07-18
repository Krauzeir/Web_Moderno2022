// Factory simples. Uma função para criar objetos

function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())



function criarProduto(nome, x, y){
    return{
        nome,
        categoria: x,
        valor: y,
        desconto: 0.1
    }
}

console.log(criarProduto("PS5", "Sony", 3000))