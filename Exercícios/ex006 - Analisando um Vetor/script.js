var vet = []
const result = document.getElementById("result")
const select = document.getElementById('addnum')        //Atribui o elemento DOM select a variável select.    

function entre_1_100(n) {   //Verifica se o número está entre 1 e 100.
    if(n >= 1 && n <= 100) {
        return true
    } else {
        return false
    }
}

function na_lista(n, list) {    //Verifica se está na lista do vetor.
    if(list.indexOf(n) == -1) {
        return false
    } else {
        return true
    }
}

function limpar_div() {     //Limpa a div caso esteja com conteúdo.
    if(result.innerHTML != null) {
        result.innerHTML = null
    }
}

function adicionar() {   
    const txt_num = document.getElementById("num").value    //Atribui o valor do elemento DOM input number a variável txt_num.
    const num = Number(txt_num)                             //Converte em número.
    if(!na_lista(num, vet) && entre_1_100(num)) {
        limpar_div()                                        //Invoca a função limpar_div.
        var item = document.createElement('option')         //Cria um elemento DOM option.
        item.text = `Valor ${txt_num} adicionado.`          //Escreve no texto da select.
        item.value = `select ${num}`                        //Adiciona o valor/id a select.
        select.appendChild(item)                            //Adiciona o item a select.
        vet.push(num)                                       //Adiciona o elemento ao vetor.
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