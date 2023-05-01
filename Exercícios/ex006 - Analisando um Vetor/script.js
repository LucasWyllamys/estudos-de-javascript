var vet = []
function adicionar() {   
    const select = document.getElementById('addnum')        //Atribui o elemento DOM select a variável select.    
    const txt_num = document.getElementById("num").value    //Atribui o valor do elemento DOM input number a variável txt_num.
    const num = Number(txt_num)                             //Converte em número.
    if(vet.indexOf(num) == -1) {
        var item = document.createElement('option')         //Cria um elemento DOM option.
        item.text = `Valor ${txt_num} adicionado.`          //Escreve no texto da select.
        item.value = `select ${num}`                        //Adiciona um valor id a select.
        select.appendChild(item)                            //Adiciona o item a select.
        vet.push(num)                                       //Adiciona um elemento no vetor.
    } else {
        window.alert('Valor é inválido ou já encontrado na lista.')       
    }
    
    //for(i = 0; i <= vet.length; i++) {
        
    //}
}

//function finalizar() {

//}