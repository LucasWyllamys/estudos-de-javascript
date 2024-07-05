const out = document.querySelector('p#out')

function start() { 
    let input = document.getElementById('num')
    let num = Number(input.value)
    for(let i = 0; i <= num; i++) {
        out.innerHTML += `${i}  &#x1F449`
    }
    out.innerHTML += '&#x1F3C1<br><br>'
}