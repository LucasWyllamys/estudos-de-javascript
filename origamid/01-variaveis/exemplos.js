var nome = 'Lucas';
var idade = 28;
var possuiFaculdade = true;
console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;
console.log(totalPreco);

//Declaração de múltiplas variáveis com um único var
var sobrenome = 'Wyllamys', 
    cidade = 'Salvador';
console.log(sobrenome, cidade);

var precoAplicativo;
console.log(precoAplicativo);

/*No JavaScript é obrigatório declarar as variáveis!
console.log(variavelNaoDeclarada)
*/

//O valor de uma variável pode ser modificado se ela não for declarada como const
var time = 'Vasco';
time = 'Flamengo';
console.log(time);