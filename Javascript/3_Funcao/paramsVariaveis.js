/* Quando não passado nenhum argumento dentro da função e utilizado "arguments"
ele passa a funcionar com um array, como mostrado abaixo */

function soma() {
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))
console.log(soma('a', 'b', "c"))
console.log(soma(1.1, 2.2, "Teste"))