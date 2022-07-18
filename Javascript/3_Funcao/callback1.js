const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice+1}. ${nome}`)
}


//Para cada elemento dentro do array, será chamado a função
fabricantes.forEach(imprimir)

fabricantes.forEach(a => {console.log(a)})