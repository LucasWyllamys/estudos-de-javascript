// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}.
function teste() {
    let x = 2
    {   // Criação de bloco
        let y = 4
        console.log(x + y)  // Saída: 6
    }
    console.log(x + y)      // Saída: Uncaught ReferenceError ReferenceError: y is not defined (pois a variável y foi declarada como let dentro do escopo de um bloco)
}

teste()