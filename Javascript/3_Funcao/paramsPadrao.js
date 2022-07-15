// Estratégia 1 para gerar valor padrão
// Falha ao enviar valores '0'
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(1, 2, 3), soma1(0, 0, 0))


// Estratégia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c, d){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1 //"b = 1", está relacionado a posição da variável no array a = 0, b = 1, c = 2, ...
    c = isNaN(c) ? 1 : c
    d = 3 in arguments ? d : 1 //"d = 3", está relacionado a posição da variável no array a = 0, b = 1, c = 2, ...
    return a + b + c + d
}
console.log(soma2(), soma2(1, 2, 3, 4), soma2(0, 0, 0, 0))


// Valor padrão do es2015
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}
console.log(soma3(), soma3(1, 2, 3), soma3(0, 0, 0))