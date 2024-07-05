function fatorial() {
    const out = document.getElementById('out')
    let num = Number(document.getElementById('num').value)
    let fat = 1
    out.innerHTML += `<h2>Calculando ${num}!</h2>`
    for(let i = num; i >= 1; i--) {
        out.innerHTML += `${num} `
        if(num != 1) {
            out.innerHTML += 'x '
        } else {
            out.innerHTML += '= '
        }
        fat *= num 
        num--
    }
    out.innerHTML += `<strong>${fat.toLocaleString('pt-br')}</strong>`
}