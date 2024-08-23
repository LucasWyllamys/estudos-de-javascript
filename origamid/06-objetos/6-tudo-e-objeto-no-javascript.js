// Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.
// Uma string herda propriedades e métodos do construtor String()
var nome = 'Lucas'

nome.length                 // Saída: 5 (quantidade de caracteres)
nome.charAt(1)              // Saída: 'u' (posição do caractere na string)
nome.replace('cas', 'ke')   // Saída: 'Luke' (substituição de caractere)
nome                        // Saída: 'Lucas'   

// Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim as suas propriedades e métodos:
var altura = 1.8

altura.toString()   // Saída: '1.8' (para string)
altura.toFixed()    // Saída: 2 (arredonda de 1.8 para 2)

// Funções também são objetos:
function areaQuadrado(lado) {
    return lado * lado
}

areaQuadrado.toString()
// Saída: 
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"
// (transforma a função em uma string)

// Os elementos DOM também são objetos:
var btn = document.querySelector('.btn')    // Seleciona uma tag, id, class do html

btn.classList.add('azul')   // Adiciona a classe azul
btn.innerText               // Saída: 'Clique'
btn.addEventListener('click', function() {  // Exibe uma janela escrito 'click' quando o botão é clicado.
    window.alert(btn.innerText)
})
// Praticamente todos os efeitos com JS são feitos utilizando propriedades e métodos de objetos do DOM.
// Web API's são métodos e propriedades que permitem a interação JavaScript e Browser.