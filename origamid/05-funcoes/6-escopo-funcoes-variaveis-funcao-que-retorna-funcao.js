/*
Escopo: Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.
Escopo Léxico: Funções conseguem acessar variáveis que foram criadas no contexto pai.
Variáveis e funções definidas fora de um bloco {}, são vistas por todos os blocos.
*/
var profissao = 'Desenvolvedor'     // Escopo Léxico

function dados() {
    var nome = 'Lucas'
    var idade = 28
    function outrosDados() {
        var cidade = 'Salvador'
        var idade = 29
        return `${nome}, ${idade}, ${cidade}, ${profissao}`
    }
    return outrosDados()    // Função retornando outra função.
}

console.log(dados())    // Saída: Lucas, 29, Salvador, Desenvolvedor
console.log(outrosDados())  // Saída: retorna um erro, pois a função está fora deste escopo.

