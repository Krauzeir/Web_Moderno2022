// Observando comportamento de uma função normal
console.log("----Normal Function Abaixo------")
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)


const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
comparaComThis(this)

console.log("----Arrow Function Abaixo------")

// Observando comportamento de uma Arrow Function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(this)


// Arrow Function, this, bind. O Arrow Function é mais forte que o bind, mesmo utilizando o bind não é alterado
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow.bind(obj)



