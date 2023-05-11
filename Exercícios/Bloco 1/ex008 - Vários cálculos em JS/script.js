function calcular() {
    let p1 = document.querySelector('p#p1')
    let p2 = document.querySelector('p#p2')
    let num = window.prompt('Digite um número:')

    num = Number(num)

    p1.innerHTML = `O número a ser analisado aqui será o <strong>${num}</strong>.`

    p2.innerHTML = `O seu valor absoluto é ${Math.abs(num)}.<br><br>`
    p2.innerHTML += `A sua parte inteira é ${Math.floor(num)}.<br><br>`
    p2.innerHTML += `O valor inteiro mais próximo é ${Math.round(num)}.<br><br>`
    p2.innerHTML += `A sua raiz quadrada é ${Math.sqrt(num)}.<br><br>`
    p2.innerHTML += `A sua raiz cúbica é ${Math.cbrt(num)}.<br><br>`
    p2.innerHTML += `O valor de ${num}<sup>2</sup> é ${Math.pow(num, 2)}.<br><br>`
    p2.innerHTML += `O valor de ${num}<sup>3</sup> é ${Math.pow(num, 3)}.`
}