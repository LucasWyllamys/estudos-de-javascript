const out = document.querySelector('p#out')

function start() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let n2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    let media = (n1 + n2) / 2
    out.innerHTML = `<h2>Analisando a situação de ${nome}...</h2>`
    if(media <= 3) {
        out.innerHTML += `Com as notas ${n1} e ${n2}, a média é ${media.toLocaleString('pt-br')}<br><br>`
        out.innerHTML += `Com média menor ou igual a 3,0, o aluno está <span id="reprovado">REPROVADO</span>`
    } else if(media >= 4 && media < 7) {
        out.innerHTML += `Com as notas ${n1} e ${n2}, a média é ${media.toLocaleString('pt-br')}<br><br>`
        out.innerHTML += `Com média entre de 4,0 e 6,9, o aluno está em <span id="recuperacao">RECUPERAÇÃO</span>`
    } else {
        out.innerHTML += `Com as notas ${n1} e ${n2}, a média é ${media.toLocaleString('pt-br')}<br><br>`
        out.innerHTML += `Com média maior ou igual a 7,0, o aluno está em <span id="aprovado">APROVADO</span>`
    }
}