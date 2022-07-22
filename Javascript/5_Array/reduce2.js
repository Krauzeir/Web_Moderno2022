// Antes de usar o .reduce(), é necessario que utilize o .map()

const alunos = [
    { nome: 'João', nota: 7.0, bolsista: false},
    { nome: 'Julia', nota: 8.5, bolsista: true},
    { nome: 'Pedro', nota: 8.1, bolsista: true},
    { nome: 'Bruno', nota: 9.1, bolsista: false}
]

// Desafio 1: Todos os alunos são bolsista?

// Arrow Function Direta
console.log(alunos.map(aluno => aluno.bolsista).reduce((resultado, bolsista) => resultado && bolsista))

// Arrow Function Detalhada
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(todosBolsistas))

// Função Normal. 
console.log(alunos.map(aluno => aluno.bolsista).reduce(function(resultado, bolsista) {return resultado && bolsista },true)) 
// IMPORTANTE: Caso deseje ter um valor inicial para seu ACUMULADOR(resultado), que nesse caso foi o 'true', o ideal é que utilize uma função normal

// Desafio 2: Algum aluno é bolsista?


// Arrow Function Direta
console.log(alunos.map(aluno => aluno.bolsista).reduce((resultado, bolsista) => resultado || bolsista))

// Arrow Function Detalhada
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(aluno => aluno.bolsista).reduce(algumBolsista))

// Função Normal
console.log(alunos.map(aluno => aluno.bolsista).reduce(function(resultado, bolsista){ return resultado || bolsista }, false)) // O valor 'false' serve de teste apenas para reforçar o IMPORTANTE

// IMPORTANTE: Caso deseje ter um valor inicial para seu ACUMULADOR(resultado), que nesse caso foi o 'true', o ideal é que utilize uma função normal