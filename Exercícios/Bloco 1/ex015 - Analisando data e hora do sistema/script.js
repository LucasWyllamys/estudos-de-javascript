var resp = document.querySelector('p#resposta')

function analisar() {
    let data = new Date()
    resp.innerHTML = `${data.toLocaleDateString('pt-BR')}<br><br>`
    resp.innerHTML += `Dia: <mark>${data.getDate()}</mark><br>`
    resp.innerHTML += `Mês: <mark>${data.toLocaleDateString('pt-BR', {month: 'long'})}</mark><br>`
    resp.innerHTML += `Ano: <mark>${data.getFullYear()}</mark><br>`
    resp.innerHTML += `Dia da Semana: <mark>${data.toLocaleDateString('pt-BR', {weekday: 'long'})}</mark><br>`
    resp.innerHTML += `Hora: <mark>${data.getHours()}</mark><br>`
    resp.innerHTML += `Minutos: <mark>${data.getMinutes()}</mark><br>`
    resp.innerHTML += `Segundos: <mark>${data.getSeconds()}</mark>`

}