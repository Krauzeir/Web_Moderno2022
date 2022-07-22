const alunos = [
    { nome: 'João', nota: 7.0},
    { nome: 'Julia', nota: 9.2},
    { nome: 'Bruno', nota: 8.1}
]

// IMPERATIVO. Como você vai obter / COMO
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

// DECLARATIVO. O que você quer obter / O QUE
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)


// Em geral, a forma DECLARATIVO é algo mais interessante por mostrar as partes de como é feito o processo, ou seja, são divididos por funções, enquanto no IMPERATIVO está tudo sendo feito em uma única função.