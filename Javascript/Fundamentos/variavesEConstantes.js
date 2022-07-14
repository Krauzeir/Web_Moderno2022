var a = 3
let b = 4

//Dar preferência para "let" em vez de "var". Não é possível declarar duas variáveis iguais com "let", porém é possível com "var". Exemplo ABAIXO:

var a = 30
b = 40

console.log(a, b)

a = 300
b = 400

console.log(a, b)

// "const" não pode ter seu valor alterado

const c = 5

console.log(c)