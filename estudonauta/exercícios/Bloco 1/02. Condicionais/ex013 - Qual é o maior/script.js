var resp = document.querySelector('p#resp')

function maior(num1 = 0, num2 = 0) {
    if(num1 > num2) {
        return num1
    } else {
        return num2
    }
}

function calcular() {
    let n1 = Number(window.prompt('Digite um número:'))
    let n2 = Number(window.prompt('Digite outro número:'))
    resp.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${maior(n1, n2)}<strong/>.`
}