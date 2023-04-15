let vet = [4, 5, 6, 8, 7, 1]
//vet[3] = 11     //Cria o índice 3 e diciona o valor 6 a ele.
//vet[4] = 10     //Cria o índice 4 e diciona o valor 10 a ele.

vet.push(2)      //Adiciona o valor 22 ao vetor criando um novo índice.

//vet.sort()  //Coloca os elementos do vetor em ordem crescente.

console.log(vet)    //Retorna todos os elementos do vetor.

//Percurso para exibição em vetor:-------------------------------
for(let p =0; p < vet.length; p++) {    
    console.log(`A posição ${p} tem o valor ${vet[p]}`)
}
//---------------------------------------------------------------
console.log("\n")
//for in. Só funciona arrays e objetos:--------------------------
for(let p in vet) {
    console.log(`A posição ${p} tem o valor ${vet[p]}`)
}
//---------------------------------------------------------------

console.log(`\nVetor tem ${vet.length} posições.`)    //Retorna o comprimento do vetor.

console.log(`\nO primeiro valor do vetor é ${vet[0]}.`)   //Retorna o valor da posição 0.

console.log(`\nO valor 8 encontra-se na posição ${vet.indexOf(8)}`)     //Retorna a posição do valor no vetor.

