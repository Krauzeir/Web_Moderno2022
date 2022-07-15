//Escopo sem função
var numero = 1
{
    var numero = 2
    console.log('dentro = ' + numero )
}
console.log('fora = ', numero )

//Escopo função

var numero = 1
function funcao(){
    var numero = 2
    console.log('dentro = ' + numero)
}
console.log('fora = ', numero)
funcao()