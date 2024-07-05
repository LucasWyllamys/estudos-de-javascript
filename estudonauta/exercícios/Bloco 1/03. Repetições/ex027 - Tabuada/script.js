const saida = document.getElementById('out')

function inicio() {
    let num = Number(document.getElementById('num').value)
    saida.innerHTML = `<h2>Tabuada de ${num}</h2>`
    for(let i = 1; i <= 10; i++) {
        saida.innerHTML += `${num} x ${i} = ${num * i}<br>` 
    }
}