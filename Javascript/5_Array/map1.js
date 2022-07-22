const nums = [1, 2, 3, 4, 5]

// For com propósito. Sempre receberá um array com X quantidade de elementos e retornará um novo array modificado com X quantidade de elementos sem alterar o array original

let resultado = nums.map(function(e) {
    return e * 2
})
console.log(resultado)


let resultado2 = nums.map(e = () => {
    return e * 2
})
console.log('Array Original: ', nums ,'Array Resultado', resultado)





const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)