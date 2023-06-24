function carregar(){
    var msg = window.document.getElementById('msg')     //Objeto mensagem.
    var img = window.document.getElementById('imagem')      //Objetos imagem.
    var data = new Date()   //Data/Hora atual do sistema.
    var hora = data.getHours()      //Pega a hora da data/hora.
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'foto_manha.png'   //Carrega foto_manha.png na página web.
        document.body.style.background = '#d0aa55'  //Modifica a cor de fundo do corpo do documento web de acorodo com o código hexadecimal.
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'foto_tarde.png'      //Carrega foto_tarde.png na página web.
        document.body.style.background = '#c66b28' 
    } else {
        //Boa noite!
        img.src = 'foto_noite.png'    //Carrega foto_noite.png na página web.  
        document.body.style.background = '#081d20'   
    }
}