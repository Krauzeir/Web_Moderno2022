// Cadeia de protótipos (prototype chain)

// Exemplo Simplificado
Object.prototype.attr0 = 'Z' // Prototipo pai de todos os objetos. Não recomendado que faça isso

const avo = { attr1: 'A'}
const pai = { __proto__: avo, attr2: 'B', attr3: 'D' }
const filho = { __proto__: pai, attr3: 'C'}

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3)




// Exemplo Detalhado
const carro = {
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing em relação à 'carro'
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //super. é utilizado para trazer o método de seu objeto pai
    }
}

Object.setPrototypeOf(ferrari, carro) 
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status)

ferrari.acelerarMais(300)
console.log(ferrari.status())
