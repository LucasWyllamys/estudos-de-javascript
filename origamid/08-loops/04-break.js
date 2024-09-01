// O loop irá parar caso encontre e palavra-chave break
var videoGames = ['Switch', 'PS4', 'Xbox', '3DS']
for (i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i])
    if(videoGames[i] === 'PS4') {
        break   // Para o loop caso a condição acima seja verdadeira.
    }
}
/* Saída:
Switch
PS4
*/