// Sintaxe da construção de um objeto com propriedades:
var pessoa = {
    nome: 'Lucas',                  // Propriedade
    idade: 28,                      // Propriedade
    profissao: 'Desenvolvedor',     // Propriedade
    passuiFaculdade: true,          // Propriedade
}
// Como acessar as propriedades do objeto:
console.log(pessoa)                     // Retorna o objeto!
console.log(pessoa.nome)                // Saída: Lucas
console.log(pessoa.passuiFaculdade)     // Saída: true

// Sintaxe da construção de um objeto com propriedades e métodos:
var quadrado = {
    lados: 4,                                // Propriedade
    area: function(tamanhoLado) {            // Método
        return tamanhoLado ** 2
    },
    perimetro: function(tamanhoLado) {      // Método
        return this.lados * tamanhoLado     // 'this' faz referência ao objeto!
    },
}
// Acessando propriedades e métodos do objeto
console.log(quadrado.lados)         // Saída: 4 (propriedade)
console.log(quadrado.area(5))       // Saída: 25 (método)
console.log(quadrado.perimetro(5))  // Saída: 20 (método)
// Obs.: Para executar um método você deve sempre inserir os parênteses, exemplo: quadrado.area(), que podem ou não ter parâmetros.
// Caso não insira os parênteses, exemplo: quadrado.area, o JavaScript retorna o objeto em si, não executando-o!

// Como abreviar métodos:
var quadrado2 = {
    lados:4,
    area(lado) {                        // Abreviação de area: function() {} para area() {}, no ES6+
        return lado ** 2
    },
    perimetro(lado) {                   // Abreviação de perimetro: function() {} para perimetro() {}, no ES6+
        return this.lados * lado
    },
}
// Acessando propriedades e métodos do objeto
console.log(quadrado2.lados)         // Saída: 4 (propriedade)
console.log(quadrado2.area(5))       // Saída: 25 (método)
console.log(quadrado2.perimetro(5))  // Saída: 20 (método)
// Obs.: Para executar um método você deve sempre inserir os parênteses, exemplo: quadrado2.area(), que podem ou não ter parâmetros.
// Caso não insira os parênteses, exemplo: quadrado2.area, o JavaScript retorna o objeto em si, não executando-o!