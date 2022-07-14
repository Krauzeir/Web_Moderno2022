// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

//Destructuring -> Retire os { parametros } da variavel x
const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n, i)




/*Destructuring -> Caso solicite alguma variável que não existe no objeto, ele retornará como undefined. E você pode configurar de forma
que tenha um valor padrão caso não encontre a variável*/

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)


const { endereco: { logradouro: l, numero: num }} = pessoa
console.log(l, num)