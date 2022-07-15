// Armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


// Armazenando uma Arrow Function em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 4))


// Retorno implícito
const subtracao = (a, b) => a - b

console.log(subtracao(4, 2))

const imprimir = a => console.log(a)
imprimir("Legal!!")