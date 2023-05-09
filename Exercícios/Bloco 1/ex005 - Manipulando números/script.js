function dobro(num) {
    return num * 2
}

function metade(num) {
    return num/2
}

function clicou() {
    let resp = document.querySelector('p#resp')
    let num = window.prompt('Digite um número:')
    resp.innerHTML = `O dobro de ${num} é ${dobro(num)} e a metade é ${metade(num)}!`
}