var menu = {    // Criação do objeto.
    width: 800,
    height: 50,
    backgroundColor: '#84E'
}

menu.backgroundColor = '#000'   // Atribui um novo valor à propriedade (Dot Notation Set).
menu.color = 'blue'             // Cria uma nova propriedade, atribuindo um valor.
menu.esconder =  function() {   // Cria um método no objeto.
    console.log('Escondido')
}

console.log(menu)   // Saída: Exibe o objeto.

var bg = menu.backgroundColor   // Atribui o valor da propriedade 'backgroundColor' à variável 'bg' (Dot Notation Get).
console.log(bg)     // Saída: #000