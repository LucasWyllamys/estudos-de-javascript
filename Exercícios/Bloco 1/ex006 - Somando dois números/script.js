function somar(n1, n2) {
    return Number(n1) + Number(n2)
}

function clicou() {
    let resp = document.querySelector('p#resp')
    let n1 = window.prompt('Digite um número:')
    let n2 = window.prompt('Digite outro número:')
    resp.innerHTML = `A soma entre <mark>${n1}</mark> e <mark>${n2}</mark> é <strong>${somar(n1, n2)}</strong>!`
}