console.log(soma(3, 4)) // Não ocorrerá erro, pois é carregado a função antes da execução do arquivo
//console.log(sub(3, 4)) // Ocorrerá erro, pois a leitura das variáveis chegue a ordem da escrita do código
//console.log(mult(3, 4)) // Ocorrerá erro, pois a leitura das variáveis chegue a ordem da escrita do código


// function declaration
function soma (x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 4))

// names function expression. Pouco usada, é mais usada para debug
const mult = function mult(x, y){
    return x * y
}
console.log(mult(3, 4))
