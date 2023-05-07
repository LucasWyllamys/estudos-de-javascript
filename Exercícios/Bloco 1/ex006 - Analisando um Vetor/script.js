var vet = []
var result = document.getElementById("result")
var select = document.getElementById('addnum')        //Atribui o elemento DOM select a variável select.

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
    let txt_num = document.getElementById("num")         //Atribui o valor do elemento DOM input number a variável txt_num.  
    let num = Number(txt_num.value)                      //Converte em número.
    if(!na_lista(num, vet) && entre_1_100(num)) {
        limpar_div()                                        //Invoca a função limpar_div.
        let item = document.createElement('option')         //Cria um elemento DOM option.
        item.text = `Valor ${num} adicionado.`          //Escreve no texto da select.
        item.value = `select ${num}`                        //Adiciona o valor/id a select.
        select.appendChild(item)                            //Adiciona o item a select.
        vet.push(num)                                       //Adiciona o elemento ao vetor.
    } else {
        window.alert('Valor é inválido ou já encontrado na lista.')     //Exibe mensagem de erro.       
    }
    txt_num.value = null    //Limpa a txt.
    txt_num.focus()     //Concentra o foco na txt.
}

function maior(vetor) {     //Retorna o maior valor dentro do vetor.
    let major = vetor[0]
    for(let i = 1; i < vetor.length; i++) {
        if(vetor[i] > major) {
            major = vetor[i]
        }
    }
    return major
}

function menor(vetor) {     //Retorna o menor valor dentro do vetor.
    let minor = vetor[0]
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] < minor) {
            minor = vetor[i]
        }
    }
    return minor
}

function soma(vetor) {      //Retorna a soma de todos os valores dentro do vetor.
    let sum = 0
    for(let i = 0; i < vetor.length; i++) {
        sum += vetor[i]
    }
    return sum
}

function finalizar() {
    if(vet.length !== 0) {  //Verifica se foi inserido algum valor no vetor/select
    let total = vet.length
    let media = soma(vet)/total
    media = media.toFixed(2)
    result.innerHTML = 
    `Ao todo, ${total} números foram inseridos.<br>
    O maior valor informado foi ${maior(vet)}.<br>
    O menor valor informado foi ${menor(vet)}.<br>
    A soma de todos os valores é ${soma(vet)}.<br>
    A média dos valores inseridos é ${media}.`
    }
}