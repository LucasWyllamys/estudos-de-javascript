const out = document.getElementById('out')
var cot //Contação do dolar

function converter_distancia(distancia_metros, converter_para) {
    if(converter_para == 'km') {
        return (distancia_metros/Math.pow(10, 3)).toLocaleString('pt-br')
    } else if(converter_para == 'Hm') {
        return (distancia_metros/Math.pow(10, 2)).toLocaleString('pt-br')
    } else if(converter_para == 'Dam') {
        return (distancia_metros/Math.pow(10, 1)).toLocaleString('pt-br')
    } else if(converter_para == 'dm') {
        return (distancia_metros * Math.pow(10, 1)).toLocaleString('pt-br')
    } else if(converter_para == 'cm') {
        return (distancia_metros * Math.pow(10, 2)).toLocaleString('pt-br')
    } else if(converter_para = 'mm') {
        return (distancia_metros * Math.pow(10, 3)).toLocaleString('pt-br')
    }
}

function inicio_distancia() {
    let distancia = Number(window.prompt('Digite uma distância em metros (m).'))
    out.innerHTML = `<h2>A distância de ${distancia} metros, corresponde a...</h2>`
    out.innerHTML += `
    ${converter_distancia(distancia, 'km')} Km (quilômetros)<br><br>
    ${converter_distancia(distancia, 'Hm')} Hm (hectômetros)<br><br>
    ${converter_distancia(distancia, 'Dam')} Dam (decâmetros)<br><br>
    ${converter_distancia(distancia, 'dm')} dm (decímetros)<br><br>
    ${converter_distancia(distancia, 'cm')} cm (centímetros)<br><br>
    ${converter_distancia(distancia, 'mm')} mm (milímetros)
    `
}

function converter_temperatura(temperatura_ºC, converter_para) {
    if(converter_para == 'K') {
        return (temperatura_ºC + 273.15).toLocaleString('pt-br')
    } else if(converter_para == 'ºF') {
        return ((temperatura_ºC * 9/5) + 32).toLocaleString('pt-br')
    }
}

function inicio_temperatura() {
    let temp = Number(window.prompt('Digite uma temperatura em ºC (Celsius)'))
    out.innerHTML = `<h2>A temperatura de ${temp}ºC, corresponde a...</h2>`
    out.innerHTML += `
    ${converter_temperatura(temp, 'K')} K (Kelvin)<br><br>
    ${converter_temperatura(temp, 'ºF')}ºF (Fahrenheit)
    `
}

function msg() {
    cot = Number(window.prompt('Antes de mais nada. Quanto está a contação do dólar agora?'))
}

function converter_real_dolar(valor_real) {
    return valor_real/cot
}

function inicio_moeda() {
    let reais = Number(window.prompt('Quantos R$ você tem na carteira?'))
    out.innerHTML = `<h2>O valor de ${reais.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}, corresponde a...</h2>`
    out.innerHTML += `
    ${converter_real_dolar(reais).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}
    `
}
