// Tipos de números (precisão para até 15 digitos, depois de 15 digitos o JavaScript arredonda)
var idade = 28
var gols = 100
var pi = 3.14   // Ponto flutuante (decimal)
var exp = 2e5   // Exponencial, o que vem depois o "e" é a quantidade de zeros (multiplica 2 por 100000). Saída: 200000
var exp = 2e-2  // Saída: 0.02 (divide 2 por 100)

// Operadores aritméticos binários
var soma = 100 + 50           // Saída: 150
var subtração = 100 - 50      // Saída: 50
var multiplicação = 100 * 2   // Saída: 200
var divisao = 100 / 2         // Saída: 50
var expoente = 2 ** 4         // Saída: 16 (2 * 2 * 2 * 2)
var modulo = 14 % 5           // Saída: 4 (resto da divisão)

//Operadores aritméticos unários
//Incremento:
var x = 5
console.log(x++)  // Saída: 5
console.log(x)    // Saída: 6
var y = 8
console.log(++y)  // Saída: 9
// Decremento:-----------------
var x = 5
console.log(x--)  // Saída: 5
console.log(x)    // Saída: 4
var y = 8
console.log(--y)  // Saída: 7
// Conversor de string em number
var idade = '28'
console.log(idade + 5)    // Saída: 285
console.log(+idade + 5)   // Saída: 33
console.log(-idade + 5)   // Saída: -23 (-28 + 5)

//Operadores aritiméticos com strings
var soma = '100' + 50;              // Saída: 10050 (concatena!)
var subtracao = '100' - 50;         // Saída: 50 (realiza a operação pois não é possível subtrair uma string)
var multiplicacao = '100' * '2';    // Saída: 200 (realiza a operação pois não é possível multiplicar uma string)
var divisao = '10' / 2;             // Saída: 5 (realiza a operação pois não é possível dividir uma string)
var divisao1 = 'Comprei 10' / 2;     // NaN (Not a Number, Não é um Número) (não é número porque não é possível dividir uma string por um número)