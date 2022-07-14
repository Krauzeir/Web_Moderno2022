const escola = "Cod3r"

//charAt, retorna o valor que está relecionado a casa(número) selecionado. Exemplo abaixo retorna o C
console.log(escola.charAt(0))
console.log(escola.charAt(5))
//charCodeAt, tabela Unicode do valor selecionado
console.log(escola.charCodeAt(3))
//indexOf, index do caracter selecionado
console.log(escola.indexOf('C'))
//substring, seleciona parte da string selecionada
console.log(escola.substring(1))
//substring, seleciona os parametros [inicio][fim]
console.log(escola.substring(0, 3))
//concat, funciona apenas com String
console.log('Escola '.concat(escola).concat("!"))
//replace, seleciona os parametros [posição][valor] para troca
console.log(escola.replace(3, 'e'))
//split, divide os valores no array parametro [selecionador]
console.log('Ana,Maria,Pedro'.split(','))