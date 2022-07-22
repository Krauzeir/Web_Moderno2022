const gatas = ['Luna', 'Wany']
const gatos = ['Loki', 'Apolo', 'Sylveon']

// .concat() Serve para juntar 2 arrays em um só. Porém não ocorre alteração nos arrays originais e é criado um novo array como mostrado abaixo:

const todos = gatas.concat(gatos, 'Nida') // A partir do segundo parametro, é adicionado normalmente
console.log(gatas, gatos, todos)

