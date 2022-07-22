// forEach() irá percorrer todo o array e nesse caso, você poderá executar alguma operação para cada linha percorrida


const aprovados = ['Bruno', 'Cleinto', 'Caique', 'Danilo', 'Fabricia']
// O ideal é que sempre seja passado os valores. Por padrão, o indice é sempre o segundo parametro (o que possibilita de ocultar na hora da função). E caso deseje ter apenas o indice dos arrays, é necessario que ele seja passado como parametro
aprovados.forEach(function (nome, indice) { // Curiosidade, existe por padrão um terceiro parametro que é o próprio array
    console.log(`${indice +1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)