// var: Variáveis criadas com 'var', vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando 'const' e 'let', pois estas respeitam o escopo de bloco.
// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined:
if(false) {
    var carro = 'Fusca'
    console.log(carro)
}
console.log(carro)  // Saída: undefined (a variável foi definica no hoisting, pois foi usada a palavra-chave 'var', no entanto o valor não foi atribuído, pois a condição é sempre falsa)

// const: Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
// Variáveis com valores constantes devem utilizar o const.
const mes = 'Dezembro'
mes = 'Janeiro'     // Erro! Pois tentou modificar o valor de uma const!
// const semana     // Erro! Pois declarou uma const sem valor!

const data = {
    dia: 22,
    mes: 'Dezembro',
    ano: 2018,
}

data.dia = 29           // Funciona! Pois você pode modificar as propriedades de um objeto mesmo ele sendo const.
data = '02 de Junho'    // Erro! Pois você está tentando modificar o tipo da variável const que antes era objeto para string.

// let: Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let ano 
ano = 2019
ano++
console.log(ano)    // Saída: 2020

// let ano = 2021      // Erro! Pois não se pode redeclarar uma variável let.