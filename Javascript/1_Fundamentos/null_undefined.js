//Quando se trata de objeto, o valor de a e b está relacionado ao ENDEREÇO onde encontra a informação
const a = {name: 'Teste'}

const b = a

/*Ao mudar o valor utilizando b, a também mudará, pois trate de 2 variáveis com o mesmo ENDEREÇO
Isso trata-se de uma ATRIBUIÇÃO POR REFERÊNCIA*/
b.name = 'Opa'

console.log(a)
console.log(b)

/*Retirando o comentário abaixo podemos ver que ocorrerá o erro, pois estamos atribuir um VALOR para uma varíavel
que possui um ENDEREÇO atribuido(objeto)*/
//a = 3


/*Quando se atribui valores PRIMITIVOS, a variável passa a carregar o VALOR e não o ENDEREÇO de fato
Isso trata-se de uma CÓPIA POR VALOR*/
let c = 3
let d = c
d++

console.log(c)
console.log(d)




let valor 
console.log(valor) //undefined -> Declarado e não inicializado
//console.log(valor2) // not defined -> Não declarado

valor = null // ausência de valor. Utilizar quando não quiser apontar para mais nenhum endereço de memoria
console.log(valor)


const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

//produto.preco = undefined // Evite atribuir undefined!! Use 0 ou null no lugar. Caso queira remover, use delete produto.preco

produto.preco = null // sem preço
console.log(produto)