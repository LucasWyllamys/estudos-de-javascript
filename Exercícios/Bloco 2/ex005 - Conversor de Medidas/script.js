const out = document.getElementById('out')

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

function inicio_temperatura() {

}

function converter_temperatura() {
    
}



