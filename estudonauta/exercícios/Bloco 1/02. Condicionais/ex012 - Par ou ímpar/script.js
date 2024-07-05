var resp = document.getElementById('resp')

function par_impar(num) {
    if(num % 2 == 0) {
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}

function calcular() {
    let n = window.prompt('Digite um número:')
    resp.innerHTML = `O número ${n} é <strong>${par_impar(n)}</strong>!`
}