let amigo = {   //Declaração de um objeto.
    nome: 'José', 
    sexo: 'Masculino', 
    Peso: 85.4,
    engordar(p = 0) {   //A função usa o valor 0 como parâmetro formal caso não seja passado o parâmetro real.
        this.Peso += p      //this é um método que faz autorreferência.
    }
}
console.log(typeof amigo)           //Tipo Object.
console.log(amigo)                  //Exibir objeto amigo.
console.log(amigo.nome)             //Nome é um atributo/propriedade do objeto amigo.
amigo.engordar(10)                  //Função que fez amigo engordar 10kg.
console.log(`${amigo.Peso} kg`)     //Exibir o atributo/pripriedade peso do objeto amigo.
