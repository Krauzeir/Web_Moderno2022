console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // Será considerado como undefined

aprovados[3] = 'Paulo'
console.log(aprovados[3])
aprovados.push('Abia')
console.log(aprovados.length)


aprovados[9] = 'Rafael' // Nesse caso, os elementos de 5 ao 8 serão undefined
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados)

// .sort() irá alterar a ordem dos arrays de forma ordenada

console.log(aprovados)
aprovados.sort()
console.log(aprovados)




// Formas de manuzear valores de um array abaixo

delete aprovados[1] // O elemento do indice irá ser deletado, porém sua posição continua e seu valor será undefined
console.log(aprovados[1])
console.log(aprovados[2])

// O .splice() pode ser utilizado tanto para dividir como adicionar valores dentro de um array. Abaixo podemos ver alguns formas de utiliza-lo

aprovados = ['Bia', 'Calors', 'Ana']
aprovados.splice(1, 2) // O primeiro parametro (1) informa o indice que deseja trabalhar. Já o segundo parametro irá EXCLUIR o/s elemento/s partindo do indice que foi escolhido no primeiro parametro baseado na quantidade informada (2)
console.log(aprovados)

aprovados.splice(1, 0, 'Bruno', 'Hugo') // Para ADICIONAR elemento/s dentro do array, basta informar os valores a partir do terceiro parametro
console.log(aprovados)

aprovados.splice(2, 0, 'Entre os nomes Bruno e Hugo') // Como pode ser visto, será adicionado os valores a partir do indice passado no primeiro parametro (2)
console.log(aprovados)


