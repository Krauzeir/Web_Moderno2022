/*function Pessoa(){
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }, 1000)
}
*/ // O resultado será NaN, pois o 'this.' não está sendo usado corretamente


// Primeira resolução
/*function Pessoa(){
    this.idade = 0

    setInterval(function () {
        this.idade++
        console.log(this.idade)
    }, 1000)
}*/

// Segunda resolução
function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function () {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa