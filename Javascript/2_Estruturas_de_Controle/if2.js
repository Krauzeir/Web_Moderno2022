//Devido a falta do {} do if, será apenas considerado o comando da primeira linha como parte do if
function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final')
}

teste1(6)
teste1(8)

//Devido ao ; abaixo, a expressão é finalizado antes, logo as 2 sentenças de console.log estão fora do laço
function teste2(num){
    if(num > 7); // cuidado com  o ; em estruturas de controle
        console.log(num)
        console.log('Final')
}

teste2(6)
teste2(8)

