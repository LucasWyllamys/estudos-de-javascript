const calc = document.querySelector('p#calc')
const resp = document.querySelector('p#resp')

function calcular(num1, num2, opcao) {
    switch(opcao) {
        case 1:
            return `${num1} + ${num2} = <strong>${num1 + num2}</strong>`
            break
        case 2:
            return `${num1} - ${num2} = <strong>${num1 - num2}</strong>`
            break
        case 3:
            return `${num1} x ${num2} = <strong>${num1 * num2}</strong>`
            break
        case 4:
            return `${num1} / ${num2} = <strong>${num1 / num2}</strong>`
        default:
            return `OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.`
    }
}

function inicio() {
    let n1 = Number(window.prompt('Insira o primeiro valor:'))
    let n2 = Number(window.prompt('Insira o segundo valor'))
    let op = Number(window.prompt(`Valores informados: ${n1} e ${n2}.
    O que vamos fazer?
    [1] Somar
    [2] Subtrair
    [3] Multiplicar
    [4] Dividir`
    ))
    calc.innerHTML = `<h2>Calculando...</h2>`
    resp.innerHTML = `${calcular(n1, n2, op)}`
}