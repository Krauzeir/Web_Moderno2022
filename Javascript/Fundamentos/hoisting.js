//Hoisting("Elevação"), eleva a variavel global para que seja declarada antes para evitar problema. Funciona apenas com VAR
console.log("a = ", a)
var a = 2
console.log("a = ", a)

/*function teste() {
    console.log("a = ", a)
    var a = 2
    console.log("a = ", a)
}

teste()*/

// Com LET não funciona o Hoisting

console.log('b = ', b)
let b = 2
console.log("b = ", b)
