// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro (não recomendado!)!
// 'use strict' impede isso.
'use strict'   // Esta declaração impede que uma variável seja usada sem ser declarada como var, let ou const (Erro: carro is not defined).

function mostrarCarro() {
    carro = 'Fusca'         // Variável não declarada como var, let ou const!
    console.log(carro)
}

mostrarCarro()             // Saída: Uncaught ReferenceError ReferenceError: carro is not defined
