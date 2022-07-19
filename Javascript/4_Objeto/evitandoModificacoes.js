// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 1.99,
    tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

// Diferente do .freeze, você poderá fazer algumas alterações
produto.nome = 'Borracha'                             // Ainda será possível atribuir(subtituir) valores 
delete produto.tag                                    // Ainda será possível deletar parametros
produto.descricao = 'Borracha escolar branca'         // Não será possível adicionar novos parametros
console.log(produto)




// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)

// Diferente do .freeze, você poderá fazer algumas alterações
pessoa.nome = 'Anderson'                             // Ainda será possível atribuir(subtituir) valores 
pessoa.sobrenome = 'Silva'                           // Não será possível adicionar novos parametros
delete pessoa.nome                                   // Não será possível deletar parametros
console.log(pessoa)

