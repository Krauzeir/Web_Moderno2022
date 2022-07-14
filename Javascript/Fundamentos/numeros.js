const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
// Considera valor INTEIRO como true, e o restante como false
console.log(Number.isInteger(peso1)) 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//toFixed, selecionar a quantidade de casas decimais deseja ter em sua resposta
console.log(media.toFixed(2)) 

/*toString, pegar o valor selecionado e transforma-lo em String (Texto)
toString(2), transforma em binário*/
console.log(media.toString(16))
console.log(typeof media)
console.log(typeof Number)