// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)  // Saída: 35

// Crie duas expressões que retornem NaN
var expressão1 = 'Isso é uma string' / 2
console.log(expressão1)  // Saída: NaN
var expressão2 = 'Isso é uma string' * 5
console.log(expressão2)  // Saída: NaN
var expressão3 = 'Isso é uma string' - 2
console.log(expressão3)  // Saída: NaN

// Somar a string '200' com o número 50 e retornar 250
var teste = +'200' + 50
console.log(teste)

// Incremente o número 5 e retorne o seu valor incrementado
var n = 5
n++
console.log(n)

// Como dividir o peso por 2?
var numero = +'80' / 2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso)

// Some 500 ao valor de scroll abaixo,
// atribuindo o novo valor a scroll
var scroll = 1000;
scroll += 500   
console.log(scroll)     // Saída: 1500

// Usando o operador ternário, atribua true para a variável darCredito,
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = true;
var possuiCasa = false;
var darCredito;
darCredito = (possuiCarro && possuiCasa)
console.log(darCredito)     // Saída: true
