const out = document.getElementById('out')

function start() {
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    out.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`
    if(ano % 4 == 0) {
        if(ano % 100 == 0 && ano % 400 == 0) {
            out.innerHTML += `O ano de ${ano} <mark class="bissexto"><strong>É BISSEXTO</strong></mark>&#x2705;`
        } else if(ano % 100 == 0) {
            out.innerHTML += `O ano de ${ano} <mark class="nao_bissexto"><strong>NÃO É BISSEXTO</strong></mark>&#x274C;`
        } else {
            out.innerHTML += `O ano de ${ano} <mark class="bissexto"><strong>É BISSEXTO</strong></mark>&#x2705;`
        }
    } else {
        out.innerHTML += `O ano de ${ano} <mark class="nao_bissexto"><strong>NÃO É BISSEXTO</strong></mark>&#x274C;`
    }
}