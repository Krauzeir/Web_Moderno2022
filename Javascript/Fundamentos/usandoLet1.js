/* Variaveis var tem escopo global (menos em FUNÇÃO). Enquanto variaveis let possuem escopo local (com/sem Função) */

/*var numero = 1
{
    let numero = 2
    console.log('dentro = ' + numero)
}
console.log('fora = ' + numero)*/


let numero = 1
{
    let numero = 2
    console.log('dentro = ' + numero)
}
console.log('fora = ' + numero)


