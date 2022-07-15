const nome = 'Rebeca'
const concatenacao = 'Ola' + nome + '!'

const template = `
    Olá 
    ${nome}
`
console.log(concatenacao, template)


//expressões
console.log(`1 + 1 = ${1+1}`)

//toUpperCase, colocar tudo em maisculo
const up = texto => texto.toUpperCase()
console.log(`Ei.... ${up('cuidado')}!`)