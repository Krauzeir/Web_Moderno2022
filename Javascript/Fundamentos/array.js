const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 6
console.log(valores)

//length, Tamanho do array
console.log(valores.length)


//Tipagem fraca
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//Retirar valor do array
console.log(valores.pop())

//Returar valor de determinado indice do array
delete valores [14]
console.log(valores)

console.log(typeof valores)