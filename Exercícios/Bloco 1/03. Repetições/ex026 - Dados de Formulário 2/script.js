const out = document.getElementById('out')

function start() {
    let vi = Number(document.getElementById('vi').value)
    let vf = Number(document.getElementById('vf').value)
    out.innerHTML += `<strong>Contando de ${vi} até ${vf}</strong><br><br>`
    if(vi < vf) {
        for(let i = vi; i <= vf; i++) {
            out.innerHTML += `${i}  &#x1F449    `
        }    
        out.innerHTML += `&#x1F3C1<br><br>`      
    } else if(vi > vf) {
        for(let i = vi; i >= vf; i--) {
            out.innerHTML += `${i}  &#x1F449    `
        }
        out.innerHTML += `&#x1F3C1<br><br>`
    } else {
        out.innerHTML += 'Não é possível contar, pois os valores são iguais!<br><br>'
    }
}