// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' } Não conseguirá pois está tentando mudar o ENDEREÇO da variavel 'pessoa'

Object.freeze(pessoa) // Congela o objeto

// Não será alterado uma vez que foi congelado(freeze) acima. Nenhum dos 3 abaixo funcionarão.
pessoa.nome = 'Maria' 
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa)