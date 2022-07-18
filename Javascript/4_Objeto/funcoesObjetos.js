const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)) // .keys Pega o nome(tag) dos dados criados
console.log(Object.values(pessoa)) // .values Pega o valor dentro da tags
console.log(Object.entries(pessoa)) // .entries Pega os valores chave/valor

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})


Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se false, não aparecerá utilizando .keys
    writable: false, // funciona próximo do .freeze
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2}
const o2 = { c: 3, a:4 }  
const obj = Object.assign(dest, o1, o2) // Será adicionado os valores de 'o1' e 'o2' em 'dest', e no caso de variável repetida, será substituido pelo ultimo valor, nesse caso a será substituido de 1 para 4


Object.freeze(obj)
obj.c = 1234
console.log(obj)