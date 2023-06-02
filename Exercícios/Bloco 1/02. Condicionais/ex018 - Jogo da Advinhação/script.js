const resp = document.querySelector('p#resposta')
var botao = document.querySelector('button#botao')
const num_sorteado = num_aleatorio(1, 100)

function num_aleatorio(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    let dif = (max - min) + 1
    let aleatorio = Math.random()
    let naleatorio = min + Math.trunc(aleatorio * dif)
    return naleatorio
}

function dica(num) {
    if(num_sorteado < num) {
        return 'MENOR'
    } else if(num_sorteado > num) {
        return 'MAIOR'
    } else {
        return 'PARABÉNS'
    }
}

function advinhar() {
    let n = Number(window.prompt('Qual é o seu palpite?'))
    if(dica(n) != 'PARABÉNS') {
        resp.innerHTML += `<br>Você digitou ${n}. Meu número é <strong>${dica(n)}</strong>!`
    } else {
        resp.innerHTML += `<br><strong>${dica(n)}</strong>! Você acertou! Eu tinha sorteado o valor ${num_sorteado}!`
        botao.disabled = true
    }
}
