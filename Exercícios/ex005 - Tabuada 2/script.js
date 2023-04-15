function tabuada() {
    var txt_num = document.getElementById('txt_num').value  //Pega o valor input number de id = txt_num.
    var num = Number(txt_num)   //Converte o valor da txt_num em número.
    var tab = document.getElementById('slt_tabuada')   //Pega o select de id = slt_tabuada.
    tab.innerHTML = null    //Limpa o select
    if(txt_num.length == 0) {
        window.alert('Digite um número!')
    } else {
        for(var c = 1; c <= 10; c++) {
            let item = document.createElement('option')     //Cria um elemento do tipo option.
            item.text = `${num} x ${c} = ${c * num}`    //Escreve no texto do elemento.
            item.value = `tab ${c}`     //Atribui um valor (id) a cada item.
            tab.appendChild(item)   //Adiciona o elemento a select tab.
        }
    }
}