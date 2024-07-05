const resp = document.querySelector('p#resp')

function clicou() {
    resp.innerHTML = `Informações sobre data/hora do sistema: <mark>${new Date()}</mark>.`
}