let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

//!! = Não, Não ! = Não
isAtivo = 1
console.log(!!isAtivo)

console.log("os verdadeiros...")
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log("os falsos...")
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar')
console.log(!!('' || null || 0 || ' '))

//Como o primeiro nome é falso, ele retornará 'Desconhecido'
let nome = ''
console.log(nome || 'Desconhecido')

//Como o primeiro nome é verdadeiro, ele retornará o valor de nome1
let nome1 = 'Lucas'
console.log(nome || 'Desconhecido')