// O código do flatMap está no final desse arquivo

// Situação exemplo
const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Bruno',
        nota: 8.1
    },
    {
        nome: 'Wany',
        nota: 9.4
    }]
},
{
    nome: 'Turma 2',
    alunos: [{
        nome: 'Lucas',
        nota: 7.3
    },
    {
        nome: 'Hugo',
        nota: 7.8
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

// O que foi entregue até então
const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)


// O que queremos com o exemplo acima
console.log([].concat([ 8.1, 9.4], [7.3, 7.8]))


// flatMap() Sua codificação não é nativa do JS. Fica abaixo um código de flatMap para resolver a demanda acima
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)