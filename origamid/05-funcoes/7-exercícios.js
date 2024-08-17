// Crie uma função para verificar se um valor é Truthy or Falsy
function TrueOrFalse(valor) {
    return !!valor
}

/* Crie uma função matemática que retorne o perímetro de um quadrado
lembrando: perímetro é a soma dos quatro lados do quadrado */
function perimetroQuadrado(lado) {
    return lado * 4
}

// Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome
function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Lucas', 'Wyllamys'))

// Crie uma função que verifica se um número é par
function IsEven(numero) {
    if (numero % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(IsEven(5))

// Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDado(valor) {
    return typeof valor
}

console.log(tipoDado('teste'))

/* addEventListener é uma função nativa do JavaScript
o primeiro parâmetro é o evento que ocorre e o segundo o Callback (ação)
utilize essa função para mostrar no console o seu nome completo
quando o evento 'click' ocorrer. */
addEventListener('click', function() {
    console.log(nomeCompleto('Lucas', 'Wyllamys'))
})

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
  