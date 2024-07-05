var resp = document.getElementById('resp')

function media(nota1, nota2) {
    return (nota1 + nota2)/2
}

function mensagem(media) {
    if(media >= 7) {
        return 'Parabéns!'
    } else {
        return 'Estude um pouco mais!'
    }
}

function clicou() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    let n2 = window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`)

    n1 = Number(n1)
    n2 = Number(n2)

    resp.innerHTML = `Calculando a média final de <mark>${nome}</mark>...<br><br>`
    resp.innerHTML += `As notas obtidas foram <mark>${n1}</mark> e <mark>${n2}</mark>.<br><br>`
    resp.innerHTML += `A média final será <mark>${media(n1, n2)}</mark>.<br><br>`
    resp.innerHTML += `<strong style='color:red;'>${mensagem(media(n1, n2))}</strong>`
}