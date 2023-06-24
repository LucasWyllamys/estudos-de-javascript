function contar() {
    let i = document.getElementById('txt_inicio').value    //Pega o valor do input number de id = inicio (como string).
    let f = document.getElementById('txt_fim').value
    let p = document.getElementById('txt_passo').value
    let result = document.getElementById('resultado')   //Pega a div com id = resultado.
    if(i.length == 0 || f.length == 0 || p.length == 0) {
        window.alert('[ERRO] Faltam dados!')    //Janela de alerta.
        result.innerHTML = 'Impossível contar!'
    } else {
        i = Number(i)   //Converte em número.
        f = Number(f)
        p = Number(p)
        if(p <= 0) {
            window.alert('[ERRO] Passo inválido!')
            result.innerHTML = 'Impossível contar!'
        } else {
            result.innerHTML = 'Contando: <br>'
            if(i > f) { 
                for(let c = i; c >= f; c -= p) {    //Contagem regressiva.
                    result.innerHTML += ` ${c} \u{1F449}`
                }
            } else {    
                for(let c = i; c <= f; c += p ) {   //Contagem crescente.
                    result.innerHTML += ` ${c} \u{1F449}`
                }  
            }
            result.innerHTML += `\u{1F3C1}`
        }
    }
}