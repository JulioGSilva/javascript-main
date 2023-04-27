function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('retorno')
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)
    if(n3 == 0) {
        window.alert('Passo não pode ser zero, conssiderando passo = 1')
        n3 = 1
    } else if(n3 < 0) {
        n3 = n3 * (-1)
    }

    if(inicio.value.length == 0 || fim.value.length ==0 || passo.value.length == 0 ) {
        res.innerHTML = 'Impossivel contar'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
    }
    if(n2 > n1) {
        for(let c = n1; c<= n2; c+= n3) {
            res.innerHTML += ` ${c} \u{1F449} `
            //crescente
        }
    } else {
        for(let c = n1; c > n2; c -= n3) {
            res.innerHTML += ` ${c} \u{1F449}`
            //regressiva
        }
    }
    res.innerHTML += `\u{1F3C1}`
}
