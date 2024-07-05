const out = document.querySelector('p#out')

function contar() {
    for(let c = 1; c <= 10; c++) {
        out.innerHTML += `${c} &#x1F449`
    }
    out.innerHTML += ' &#x1F3C1<br>'
}