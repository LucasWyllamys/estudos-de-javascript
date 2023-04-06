function verificar() {
    var data_atual = new Date()   //Data do sistema.
    var ano_atual = data_atual.getFullYear()    //Pega o ano completo (4 dígitos: YYYY) da data.
    var ano_form = document.getElementById('txt_ano')   //Pega o input button do form com o id txt_ano.
    var resposta = document.querySelector('div#resposta')   //Pega a div com o id resposta.
    var img = document.getElementById('imagem')  //Pega a div com o id imagem.
    if (ano_form.value.length == 0 || ano_form.value > ano_atual) {     //Valida se há algo digitado na input e se o ano inserido é maior que o ano atual.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sexo_form = document.getElementsByName('rad_sexo')   //Pega os radios pelo nome rad_sexo.
        var idade = ano_atual - ano_form.value      //Calcula a idade.
        var genero = ''     //String vazia.
        if (sexo_form[0].checked) {     //Se o sexo selecionado no form for Masculino.
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {    //Menino.
                img.src = 'foto_menino.png'     //Insere a imagem de nome foto_menino.png na div img.
                document.body.style.background = '#836b63'  //Modifica a cor de fundo.
            } else if (idade < 21) {    //Jovem.
                img.src = 'foto_homem_jovem.png'
                document.body.style.background = '#e6b789'
            } else if (idade < 50) {    //Adulto.
                img.src = 'foto_adulto.png'
                document.body.style.background = '#373832'
            } else {    //Idoso.
                img.src = 'foto_idoso.png'
                document.body.style.background = '#79503c'   
            }
        } else if (sexo_form[1].checked) {      //Se o sexo selecionado no form for Feminino.
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {    //Menina.
                img.src = 'foto_menina.png'
                document.body.style.background = '#a89889'
            } else if (idade < 21) {    //Jovem.
                img.src = 'foto_mulher_jovem.png'
                document.body.style.background = '#e3a191'
            } else if (idade < 50) {    //Adulta.
                img.src = 'foto_adulta.png'
                document.body.style.background = '#ca8661'
            } else {    //Idosa.
                img.src = 'foto_idosa.png'
                document.body.style.background = '#956c70'
            }
        }
        resposta.innerHTML = `${genero} com ${idade} anos.`    //Modifica o texto HTML da div resultado.
    }
}