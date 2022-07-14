// Função sem retorno

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(1,2) // Forma correta

imprimirSoma(1) // Not a Number => Number + Undefined

imprimirSoma(10, 2, 3, 4) // Considera os 2 primeiros parâmetros

imprimirSoma() // Not a Number => Undefined + Undefined





// Função com retorno

function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) // Not a Number => Undefined + Undefined

