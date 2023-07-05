const out = document.getElementById('out')

function inicio() {
    let funcionario = window.prompt('Qual é o nome do funcionário?')
    let salario = Number(window.prompt(`Qual é o salário de ${funcionario}?`))
    let ref = Number(window.prompt(`O salário de ${funcionario} vai ser reajustado em qual porcentagem (%)?`))
    out.innerHTML = `<h2>${funcionario} recebeu um aumento salarial!</h2>`
    out.innerHTML += `O salário atual é ${salario.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.<br><br>`
    let aumento = salario * ref/100
    out.innerHTML += `Com um aumento de ${ref}%, o salário vai aumentar ${aumento.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})} no próximo mês.<br><br>`
    out.innerHTML += `E a partit daí, ${funcionario} vai passar a ganhar ${(salario + aumento).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}.`
}