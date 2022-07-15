/* OS CÓDIGOS ABAIXO NÃO SÃO INTERESSANTES DE SEREM USADOS. ESTÃO AQUI POR UMA QUESTÃO DE CONHECIMENTO */

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums){
    if (x == 5){
        break //O break não funciona no IF. Logo ele irá atrás da estrutura do código mais próxima (FOR, WHILE, SWITCH)
    }
    console.log(`Valor de x é: ${nums[x]}`)
}


for (y in nums){
    if (y == 5){
        continue //O continue não funciona no IF. Logo ele irá atrás da estrutura do código mais próxima (FOR, WHILE, SWITCH)
    }
    console.log(`Valor de y é: ${nums[y]}`)
}


//Não utilizar esse tipo de código
externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}