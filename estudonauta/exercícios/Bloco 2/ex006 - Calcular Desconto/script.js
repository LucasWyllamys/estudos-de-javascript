const out = document.getElementById('out')

function inicio() {
    let produto = window.prompt('Qual é o produto que você está comprando?')
    let preco = Number(window.prompt(`Qual é o preço de ${produto}?`))
    out.innerHTML = `<h2>Calculando desconto de 10% para ${produto}...</h2>`
    out.innerHTML += `O preço original era ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.<br><br>`
    let desconto = preco * 0.1
    out.innerHTML += `Você acaba de ganhar ${desconto.toLocaleString('pr-br', {style: 'currency', currency: 'BRL'})} de desconto (-10%).<br><br>`
    out.innerHTML += `No fim, você vai pagar ${(preco - desconto).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no produto ${produto}.`
}