var vet = []
const result = document.getElementById("result")
function adicionar() {   
    const select = document.getElementById('addnum')        //Atribui o elemento DOM select a variável select.    
    const txt_num = document.getElementById("num").value    //Atribui o valor do elemento DOM input number a variável txt_num.
    const num = Number(txt_num)                             //Converte em número.
    if(vet.indexOf(num) == -1 && num >= 1 && num <= 100) {
        if(result.innerHTML != null) {
            result.innerHTML = null
        }
        var item = document.createElement('option')         //Cria um elemento DOM option.
        item.text = `Valor ${txt_num} adicionado.`          //Escreve no texto da select.
        item.value = `select ${num}`                        //Adiciona um valor id a select.
        select.appendChild(item)                            //Adiciona o item a select.
        vet.push(num)                                       //Adiciona um elemento no vetor.
    } else {
        window.alert('Valor é inválido ou já encontrado na lista.')     //Exibe mensagem de erro.       
    }
}

function finalizar() {
    var total = vet.length
    var maior = vet[0]
    var menor = vet[0]
    for(var i = 1; i < vet.length; i++) {
        if(vet[i] > maior) {
            maior = vet[i]
        } else if (vet[i] < menor) {
            menor = vet[i]
        }
    }
    var soma = 0
    for(i = 0; i < vet.length; i++) {
        soma += vet[i]
    }
    var media = soma/total
    media = media.toFixed(2)
    result.innerHTML = 
    `Ao todo, ${total} números foram inseridos.<br>
    O maior valor informado foi ${maior}.<br>
    O menor valor informado foi ${menor}.<br>
    A soma de todos os valores é ${soma}.<br>
    A média dos valores inseridos é ${media}.`
}