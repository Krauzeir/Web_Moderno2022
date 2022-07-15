function boaNoticia(nota) {
    if(nota >= 7){
        console.log('Passou')
    }
}

boaNoticia(8.1)
boaNoticia(6.1)

function eVerdade(valor){
    if(valor) {
        console.log("É verdade... " + valor)
    }
}

eVerdade()
eVerdade(null)
eVerdade(NaN)
eVerdade('')
eVerdade(0)
eVerdade(1)
eVerdade(' ')
eVerdade([])
eVerdade([1, 2])
eVerdade({})

