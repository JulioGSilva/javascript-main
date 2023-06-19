function add() {
    var elemento = document.getElementById('tarefa')
    var tarefa = elemento.value
    var cartao = document.createElement('div')
    cartao.classList.add('cartao')
    // -------------------------------------
    var h4 = document.createElement('h4')
    h4.append(tarefa)
    h4.classList.add('txt')
    // -------------------------------------
    var button = document.createElement('button')
    button.classList.add('btn')
    button.setAttribute('id', 'botao')

    var v = document.createElement('span')
    v.innerHTML = 'done'
    v.classList.add('done-btn', 'material-symbols-outlined')
    button.append(v)
    // -------------------------------------
    var button2 = document.createElement('button')
    button2.classList.add('btn')
    button2.setAttribute('id', 'botao')

    var x = document.createElement('span')
    x.innerHTML = 'close'
    x.classList.add('remove-btn', 'material-symbols-outlined')
    button2.append(x)
    // -------------------------------------
    // cartao.innerHTML = tarefa
    
    cartao.append(h4, button, button2)

    var sec = document.getElementById('part2')
    sec.append(cartao)
    
}

function complete() {
    var complete = document.getElementById('botao')
    complete.addEventListener('click', function sus() {
        console.log('foi')
    })
}