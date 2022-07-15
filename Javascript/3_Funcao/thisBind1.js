// No exemplo abaixo não encontrará a variável saudacao sem o 'this.'
/*const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(saudacao)
    }
}*/

const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Conflito entre paradigmas: funcional e OO

const falar2 = pessoa.falar.bind(pessoa) // Forma correta para amarrar o 'this.' da função que deseja passar
falar2()