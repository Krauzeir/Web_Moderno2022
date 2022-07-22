const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]


// .filter() Irá retornar um novo array baseado no array original utilizado para a função de forma que ele retorná uma quantidade IGUAL ou MENOR de X elementos em relação ao array original. NUNCA uma quantidade maior.

console.log(produtos.filter( produto => {
    return true
}))

console.log(produtos.filter( produto => {
    return produto.preco > 500
}))

console.log(produtos.filter( (produto) => {
    return produto.fragil === false
}))

// Conseguir pegar no array original os produtos com preco acima de 500 e que sejam frágeis

// Resposta 1 

console.log("Resposta 1: ", produtos.filter( produto => produto.preco > 500).filter( produto => produto.fragil === true))

// Resposta 2

const caro = produto => produto.preco > 500
const fragil = produto => produto.fragil === true
console.log("Resposta 2: ", produtos.filter(caro).filter(fragil))
