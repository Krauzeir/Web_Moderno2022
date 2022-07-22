const jogos = ['Genshin', 'League of Legends', 'Pokemon', 'Grand Chase']
jogos.pop() // .pop() REMOVE o ultimo elemento do array
console.log(jogos)

jogos.push('Elsword') // .push() ADICIONA um elemento na ultima posição do array

jogos.shift() // .shift() REMOVE o primeiro elemento do array
console.log(jogos)

jogos.unshift('Ori')    // .unshift() ADICIONA um elemento na primeira posição do array
console.log(jogos)

// splice pode adicionar e remover elementos

// Adicionando...
jogos.splice(2, 0, 'TERA', 'Jogo NFT?')
console.log(jogos)

// Removendo...
jogos.splice(3, 1)
console.log(jogos)

const algunsJogos = jogos.slice(2) // Cria um novo array baseado no array passado. O parametro determina o indice do array que será iniciado a divisão. Irá pegar o indice selecionado até o fim do array
console.log(algunsJogos)

const algunsJogos2 = jogos.slice(1, 4) // O segundo parametro determina o fim do array que deseja pegar. PORÉM NÃO SERÁ PEGO O ELEMENTO DO INDICE INFORMA, e sim o elemento do indice anterior a ele
console.log(algunsJogos2)


