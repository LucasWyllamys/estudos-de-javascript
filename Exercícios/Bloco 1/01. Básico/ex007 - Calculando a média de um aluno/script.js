function media(n1, n2) {
    return (Number(n1) + Number(n2))/2
}

function clicou() {
    let resp = document.querySelector('p#resp')
    let nome = window.prompt('Qual o nome do aluno?')
    let n1 = window.prompt(`Qual foi a primeira nota de ${nome}?`)
    let n2 = window.prompt(`Além de ${n1}, qual foi a outra nota de ${nome}?`)

    resp.innerHTML = `Calculando a média final de <mark>${nome}</mark>.<br><br>`
    resp.innerHTML += `As notas obtidas foram <mark>${n1} e ${n2}</mark>.<br><br>`
    resp.innerHTML += `A média final será <mark>${media(n1, n2)}</mark>.`
}