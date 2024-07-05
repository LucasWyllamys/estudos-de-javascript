const p = document.querySelector('p#paragrafo')
var c = 0

function contar() {
    c++
    p.innerHTML = `O contador está com <mark>${c}</mark> cliques.`
}

function zerar() {
    c = 0
    p.innerHTML = `O contador está com <mark>${c}</mark> cliques.`
}