// Comparar com o arquivo 'thisBind2.js'

function Pessoa(){
    this.idade =0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa()