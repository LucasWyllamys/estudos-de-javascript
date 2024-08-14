addEventListener('click', function() {  // Chamadas de Callback, geralmente são funções que ocorrem após algum evento.
    console.log('Clicou1!')
}) 
// A função acima possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima
// Funções anônimas são aquelas em que o nome da função não é definido, escritas como function() {} ou () => {}

// A mesma função acima poderia ser escrita como abaixo:
function executar() {
    console.log('Clicou2!')
}

addEventListener('click', executar)
