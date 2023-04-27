function calcular() {
    let nu1 = window.document.getElementById('num1').value
    let nu2 = window.document.getElementById('num2').value
    let simb = window.document.getElementById('select').value
    let div = window.document.getElementById('resp')
    
    let num1 = Number(nu1)
    let num2 = Number(nu2)

    switch (simb) {
        case '+':
            div.innerText = `A soma entre ${num1} e ${num2} é ${num1 + num2}`
            break;
        case '-':
            div.innerText = `A subtração entre ${num1} e ${num2} é ${num1 - num2}`
            break
        case '*':
            div.innerText = `A multiplicação entre ${num1} e ${num2} é ${num1 * num2}`
            break
        case '/':
            div.innerText = `A divisão entre ${num1} e ${num2} é ${num1 / num2}`
            break
        default:
            alert('Celecione uma opcão')
            break;
    }
}