var nome = 'Lucas'
var idade = 28
var possuiFaculdade = true
console.log(nome, idade, possuiFaculdade)

var preco = 25
var totalComprado = 5
var totalPreco = totalComprado * preco
console.log(totalPreco)

//O valor de uma variável pode ser modificado se ela não for declarada como const
var time = 'Vasco'
time = 'Flamengo'
console.log(time)

// Como declarar múltiplas variáveis com um único termo
var sobrenome = 'Wyllamys', 
    cidade = 'Salvador'
console.log(sobrenome, cidade)

//  Você pode declarar uma variável e não atribuir valor inicialmente
var precoAplicativo
console.log(precoAplicativo)   // Saída: undefined

// No JavaScript é obrigatório declarar as variáveis!
// console.log(variavelNaoDeclarada)   // Saída: variavelNaoDefinida is not defined

// Como concatenar variaveis
var nome = 'Lucas'
var sobrenome = 'Wyllamys'
var nomeCompleto = nome + ' ' + sobrenome
// Você pode somar números com strings, o resultado final é sempre uma string
var gols = 1000
var frase = 'Romário fez ' + gols + ' gols'
console.log(frase)  // Saída: Romário fez 1000 gols

// Como delimitar strings
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";     // O contra barra (\) anula a função das aspas ("") quando é inserido antes delas
`JavaScript é "super" fácil"`;
//"JavaScript é "super" fácil";       // Inválido

// Como usar template string
// Use a crase (``) para delimitar a string e use o placeholder ${} dentro da string para sinalizar a variável.
var gols = 1000
var frase = `Romário fes ${gols} gols`
console.log(frase)

