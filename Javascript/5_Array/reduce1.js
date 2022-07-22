// Antes de usar o .reduce(), é necessario que utilize o .map()

const alunos = [
    { nome: 'João', nota: 7.0, bolsista: false},
    { nome: 'Julia', nota: 8.5, bolsista: true},
    { nome: 'Pedro', nota: 8.1, bolsista: true},
    { nome: 'Bruno', nota: 9.1, bolsista: false}
]

// .reduce() Irá criar um acumulador para juntar os valores do array da forma que deseja. O primeiro parametro se tratar do ACUMULADOR e o segundo parametro será os novos valores que serão adicionados ao ACUMULADOR

console.log(alunos.map(aluno => aluno.nota))

const resultado = alunos.map(aluno => aluno.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // O valor 0 representa o valor inicial do acumulador
console.log(resultado)


// O processo acima (const resultado) pode ser desenhada nas seguintes etapas
console.log('Resumindo...')
const pegarNotas = alunos.map(aluno => aluno.nota)
const acumularNotas = pegarNotas.reduce((acumulador, atual) => {return acumulador + atual}, 0)  // O valor 0 representa o valor inicial do acumulador
console.log(acumularNotas)