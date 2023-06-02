const resp = document.querySelector('p#resposta')
var data_atual = new Date()
var ano_atual = data_atual.getFullYear()

function idade(year) {
    return ano_atual - year
}

function calcular() {
    let ano = window.prompt('Em que ano você nasceu?')
    resp.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${idade(ano)}</strong> anos em ${ano_atual}.`
}