// forEach é um método que executa uma função para cada item da Array. É uma forma mais simples de utilizarmos um loop com arrays (ou array-like).
// Podemos passar os seguintes parâmetros: item, index e array.
// O parâmetro 'item' faz referência ao elemento da array que está sendo renderizado no momento.
// O parâmetro 'index' faz referência ao índice do elemento que está sendo renderizado no momento.
// O parâmetro 'array' faz referência a array em si.
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']
videoGames.forEach(function(item, index, array) {
    console.log(item, index, array)
})
/* Saída:
Switch 0 (4) ['Switch', 'PS4', 'Xbox', '3DS']
PS4 1 (4) ['Switch', 'PS4', 'Xbox', '3DS']
Xbox 2 (4) ['Switch', 'PS4', 'Xbox', '3DS']
3DS 3 (4) ['Switch', 'PS4', 'Xbox', '3DS']
*/