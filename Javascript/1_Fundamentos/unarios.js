let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1
console.log(num1)

console.log(num1)

console.log(++num1 === num2--) //True. o -- será realizado depois. Não utilize esse padrão
console.log(num1 === num2) //False. 

