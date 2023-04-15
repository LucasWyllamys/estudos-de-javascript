function tabuada() {
    var txt_num = document.getElementById('txt_num').value  //Pega o valor input number de id = txt_num.
    var num = Number(txt_num)   //Converte o valor da txt_num em número.
    var result = document.getElementById('resultado')   //Pega a div de id = result.
    if(txt_num.length == 0) {
        window.alert('Digite um número!')
        result.innerHTML = 'Digite um número!'
    } else {
        result.innerHTML = null     //Limpa todas as informações da div.
        for(var c = 1; c <= 10; c++) {
            var produto = c * num
            var r = `${num} x ${c} = ${produto} <br>`   //<br> = quebra de linha no HTML.
            result.innerHTML += r   //Adiciona o valor de r a result.
        }
    }   
}