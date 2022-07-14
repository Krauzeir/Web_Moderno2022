// par nome/valor ou chave/valor

const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = "Falaaaa" // contexto léxico 2
    return saudacao
}

// Objetos são grupos alinhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)