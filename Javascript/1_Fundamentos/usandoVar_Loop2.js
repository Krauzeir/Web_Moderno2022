// Justamente por var ter escopo global, podemos ver o erro no programa abaixo

const funcs = []

for (var i = 0; i< 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
