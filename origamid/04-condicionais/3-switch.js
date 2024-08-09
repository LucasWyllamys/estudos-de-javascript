/* 
Com o switch você pode verificar se uma variável é igual à diferentes valores utilizando o case. Caso ela seja igual, você pode fazer alguma coisa e utilizar a palavra chave break; para cancelar a continuação. O valor de default ocorrerá caso nenhuma das anteriores seja verdadeira.
*/
var corFavorita = 'Azul'

switch (corFavorita) {
    case 'Azul':
        console.log('Olhe para o céu.')
        break                               // Cancela a continuação.
    case 'Vermelho':
        console.log('Olhe para rosas.')
        break
    case 'Amrelo':
        console.log('Olhe para o sol.')
        break
    default:                                // Valor padrão caso nenhum dos outros seja retornado.
        console.log('Feche os olhos.')
}

