const out = document.querySelector('p#out')

function inicio() {
    for(let c = 1; c <= 10; c++) {
        if(c % 2 == 0) {
        out.innerHTML += `<mark><strong>${c}</strong></mark> &#x1F449`
        } else {
        out.innerHTML += `${c} &#x1F449`
        }
    }
    out.innerHTML += '&#x1F3C1<br><br>'
}