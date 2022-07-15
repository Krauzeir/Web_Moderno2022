/*** Exemplo 1 ***/
// Função Normal
let dobro = function (a) {
    return 2 * a
}

// Arrow Function. Toda arrow function é uma função anônima
dobro = (a) => {
    return 2 * a
}

// Arrow Function com um return de UMA ÚNICA linha
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))




/*** Exemplo 2 ***/
// Função Normal
let ola = function () {
    return 'Olá'
}
// Arrow Function com um return de UMA ÚNICA linha
ola = () => 'Olá'
console.log(ola())