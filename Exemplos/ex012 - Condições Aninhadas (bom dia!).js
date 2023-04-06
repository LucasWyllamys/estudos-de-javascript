var agora = new Date()  //Data e hora atual do sistema.
var hora = agora.getHours()     //Pega apenas a hora do sistema.
console.log(`Agora são exatamente ${hora} horas.`)
    if(hora < 6){
        console.log('Boa madrugada!')
    }else if(hora < 12){
        console.log('Bom dia!')
    }else if(hora <= 18){
        console.log('Boa tarde!')
    }else{
        console.log('Boa noite!')
    }