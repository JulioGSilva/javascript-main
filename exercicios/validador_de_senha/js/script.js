function validador() {
    let senha = document.getElementById('senha');
    let valor = senha.value;
    if (valor == 'Senha123') {
        let res = document.getElementsByTagName('main')
        let div = document.createElement('div')
        div.innerHTML = 'Entrada confirmada'
        res[0].append(div)
        console.log(valor)
    } else {
        let res = document.getElementsByTagName('main')
        let div = document.createElement('div')
        div.innerHTML = 'Entrada negada'
        res[0].append(div)
        console.log('erro!')
    }
    
}

function chama() {
    var res = document.getElementsByTagName('main');
    let div = document.createElement('div')
    div.innerHTML = 'aqui'
    res[0].append(div)
}