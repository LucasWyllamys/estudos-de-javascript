const resp = document.getElementById('resposta')

function sortear(min, max) {
    min = Math.ceil(min)    //Arredonda para cima para garantir que seja um número inteiro
    max = Math.floor(max)   //Arredonda para baixo para garantir que seja um número inteiro
    let dif = (max - min) + 1   //Terno constante a quantidade de dígitos do número que será gerado e que tbm será o multiplo do número aleatório gerado por Math.rondom().
    let aleatorio = Math.random()   //Gera um número real entre 0 e 1.
    let num = min + Math.trunc(aleatorio * dif)   //Gera um número aleatório no intervalo desejado | min (estabelece o valor mínimo) + Math.trunc(aleatorio * dif)
    return num
}

function clicou() {
    resp.innerHTML += `Acabei de pensar no número <mark>${sortear(1, 100)}</mark><br>`
}

function limpar() {
    resp.innerHTML = ''
}