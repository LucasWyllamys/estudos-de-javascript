const out = document.getElementById('out')

function start() {
    out.innerHTML += '<br><br>'
    for(let i = 1; i <= 10; i++) {
        if(i % 2 == 0) {
            out.innerHTML += `${i}  &#x1F449   `
        }
    }
    out.innerHTML += '&#x1F3C1'
}