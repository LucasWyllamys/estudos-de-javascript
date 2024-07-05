const out = document.getElementById('out')

function clicou() {
    let mes = window.prompt('Digite o mês por extenso (ex: Setembro):')
    let estacao
    switch(mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'inverno'
            break
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'primavera'
            break
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'verão'
            break
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'outono'
            break
        default:
            estacao = 'indefinida!!!'
            break
    }
    out.innerHTML = `No mês de <strong>${mes}</strong>, a estação é <strong>${estacao}</strong>.`
}