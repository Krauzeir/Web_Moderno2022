const imprimirResultado = nota => {
    switch (Math.floor(nota)) {
        //No caso abaixo, tanto para o VALOR 10 e 9, será apresentando o mesm console.log
        case 10:
        case 9:
            console.log("Quadro de Honra!")
            break //Sem isso, quando entrar no primeiro case, irá acessar os demais
        case 8: case 7:
            console.log("Aprovado")
            break
        case 6: case 5: case 4:
            console.log("Recuperação")
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log("Nota Inválida")
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
