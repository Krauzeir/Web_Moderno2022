function tratarErro (erro) {
    //Informa algo
    //throw new Error('...')
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    //Tenta executar
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } 
    //Adquire o erro que aconteceu
    catch (e) {
        tratarErro(e)
    }
    //Será executado independente de erro ou não
    finally {
        console.log('final')
    }
    
}

const obj = { nome: 'Roberto' }
imprimirNomeGritado(obj)