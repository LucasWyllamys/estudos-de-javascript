const out = document.querySelector('p#out')

function inicio() {
    out.innerHTML += '<br><br>'
    for(let i = 10; i >= 1; i--) {
        out.innerHTML += `${i}  &#x1F449    `
    }
    out.innerHTML += '&#x1F3C1'
}