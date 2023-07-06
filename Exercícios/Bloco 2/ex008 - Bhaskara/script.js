const out = document.getElementById('out')

function calcular() {
    let x1, x2, x
    
    let a = Number(window.prompt('Qual é o valor de a?'))
    let b = Number(window.prompt('Qual é o valor de b?'))
    let c = Number(window.prompt('Qual é o valor de c?'))

    let delta = Math.pow(b, 2) - (4 * a * c)

    out.innerHTML = `<br><strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong><br><br>`
    out.innerHTML += `&#9651; = ${b}<sup>2</sup> - 4 * ${a} * ${c}<br><br>`
    out.innerHTML += `&#9651; = ${delta}<br><br><br>`

    if(delta > 0) {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)

        out.innerHTML += `x<sub>1</sub> = = (-${b} + √${delta}) / (2 * ${a})<br>`
        out.innerHTML += `x<sub>1</sub> = <strong>${x1.toFixed(2)}</strong><br><br>`

        out.innerHTML += `x<sub>2</sub> = = (-${b} - √${delta}) / (2 * ${a})<br>`
        out.innerHTML += `x<sub>2</sub> = <strong>${x2.toFixed(2)}</strong>`
    } else if(delta == 0) {
        x = -b / (2 * a)
        out.innerHTML += `x = -${b} / (2 * ${a})<br>`
        out.innerHTML += `x<sub>1</sub> = ${x.toFixed(2)}`
    } else {
        out.innerHTML += `Como &#9651; < 0, então as raízes são complexas!`
    }
}