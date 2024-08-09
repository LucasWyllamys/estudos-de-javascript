// Operador de negação.
// O operador "!", nega uma operação booleana. Ou seja, !true é igual a false.
var teste = true
if (!true) {
    console.log('É verdadeiro!')
} else {
    console.log('É falso!')
}
// Dica: Você pode utilizar o "!!" para verificar se uma expressão é true ou false.
if (!!true) {
    console.log('É verdadeiro!')
}

// Operador lógico && (e, and)
// Retorna false se ao menos um dos valores for false. Retorna true se todos os valores forem true.
true && true               // Saída: true (comparação lógica)
true && false              // Saída: false (comparação lógica)
false && true              // Saída: false (comparação lógica)
'Gato' && 'Cão'            // Saída: 'Cão'
(5 - 5) && (5 + 5)         // Saída: 0 (expressão aritmética) (0 é um valor false) 
'Gato' && false            // Saída: false
(5 >= 5) && (3 < 6)        // Saída: true (comparação)

// Operador lógico || (ou, or)
// Retorna true se ao menos um dos valores for true. Retorna false se todos os valores forem false.
true || true               // Saída: true (comparação lógica)
true || false              // Saída: true (comparação lógica)
false || true              // Saída: true (comparação lógica)
'Gato' || 'Cão'            // Saída: 'Gato'
(5 - 5) || (5 + 5)         // Saída: 10 (expressão aritmética) (10 é um valor true)
'Gato' || false            // Saída: Gato
(5 >= 5) || (3 < 6)        // Saída: true (comparação)