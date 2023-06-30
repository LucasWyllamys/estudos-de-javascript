function inicio() {
    let produto = window.prompt('Que produto você está comprando?')
    let preco = Number(window.prompt(`Quanto custa o(a) ${produto} que você está comprando?`))
    let valor = Number(window.prompt(`Qual foi o valor que você deu para pagar o ${produto}?`))
    let troco = valor - preco
    let msg = window.alert(`Você comprou ${produto} que custou ${preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}. 
Deu ${valor.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} em dinheiro e vai receber ${troco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} de troco.`)
}