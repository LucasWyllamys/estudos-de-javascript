function clicou() {
    let resp = document.querySelector('p#resp')
    let nome = window.prompt('Qual é o seu nome?')
    resp.innerHTML = `Olá, ${nome}! É um grande prazer te conhecer! 🖖`
}