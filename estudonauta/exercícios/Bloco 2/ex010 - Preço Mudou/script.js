const out = document.getElementById('out')

function start() {
    let preco_anterior = Number(window.prompt('Qual era o preço anterior do produto?'))
    let preco_atual = Number(window.prompt('Qual é o preço atual do produto?'))

    out.innerHTML = '<h2>Analisando os valores informados...</h2>'
    out.innerHTML += `O produto custava ${preco_anterior.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} e agora custa ${preco_atual.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.<br><br>`
    if(preco_atual > preco_anterior) {
        out.innerHTML += 'Hoje o produto está mais caro!<br><br>'
        let dif = preco_atual - preco_anterior
        out.innerHTML += `O preço subiu ${dif.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.<br><br>`
        let variacao = (dif / preco_anterior) * 100
        out.innerHTML += `Uma variação de ${variacao.toFixed(1)}% para cima.`
    } else if(preco_atual < preco_anterior) {
        out.innerHTML += 'Hoje o produto está mais barato!<br><br>'
        let dif = preco_anterior - preco_atual
        out.innerHTML += `O preço caiu ${dif.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em relação ao preço anterior.<br><br>`
        let variacao = (dif / preco_atual) * 100
        out.innerHTML += `Uma variação de ${variacao.toFixed(1)}% para baixo.`
    } else {
        out.innerHTML += 'O produto não mudou de preco!'
    }
}