function MeuObjeto() {}
console.log(MeuObjeto.prototype)

// Todo objeto criado por um Função Construtora apontam para um mesmo Prototipo
const obj1 = new MeuObjeto()
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(obj1.__proto__ === MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.fala = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`) 
}

/*
Não funcionará com a utilização de Arrow Function, retornará undefined
MeuObjeto.prototype.fala = () => {
    console.log(`Bom dia! Meu nome é ${this.nome}`) 
}
*/

obj1.fala()

obj2.nome = 'Rafael'

obj2.fala()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Hugo'
obj3.fala()


// Resumindo o aprendizado deste arquivo ... Curiosidade apenas

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)