const imprimirResultado = nota => {
    if(nota >= 7) {
        console.log('Aprovado')
    }
    else {
        console.log('Reprovado')
    }
}

imprimirResultado(8)
imprimirResultado(6)
imprimirResultado("Epa") // cuidado com linguagem fracamente tipada