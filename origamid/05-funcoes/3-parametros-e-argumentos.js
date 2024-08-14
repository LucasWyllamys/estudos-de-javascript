// peso e altura são parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2)
    return imc
}

console.log(imc(80, 1.82))  // Saída: 24.151672503320853 (80 e 1.80 são os argumentos, são os valores fornecidos nos parâmetros da função)
console.log(imc(60, 1.70))  // Saída: 20.761245674740486 (60 e 1.70 são os argumentos, são os valores fornecidos nos parâmetros da função)

// Uma função pode ser executada sem argumentos
function corFavorita(cor) {
    if (cor === 'azul') {
        return 'Você gosta do céu'
    } else if (cor === 'verde') {
        return 'Você gosta de mato'
    } else {
        return 'Você não gosta de nada'
    }
}

console.log(corFavorita())  // Saída: Você não gosta de nada