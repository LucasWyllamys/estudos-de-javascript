// Utilize a palavra-chave this para fazer referência ao próprio objeto.
var height = 120
var menu = {
    width: 800,
    height: 50,
    metadeHeight() {
        return this.height / 2      // O 'this' faz referência as propriedades e métodos que estão dentro do objeto.
    }
}
    
console.log(menu.metadeHeight())    // Saída: 25 (sem o this, seria 60).
