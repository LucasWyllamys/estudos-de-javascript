// Função sem return:
function imc2(peso, altura) {
    const imc = peso / (altura ** 2)
    console.log(imc)
}

imc2(20, 1.8)   // Saída: 6.172839506172839
console.log(imc2(20, 1.8))  //// Saída: 6.172839506172839 e undefined (pois a função não tem retorno "return")