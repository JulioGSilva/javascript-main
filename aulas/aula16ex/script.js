let num = document.getElementById('num')
let lista = document.getElementById('lista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
   } else {
        return false
   }
}

function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}create

function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido, ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
    
}



function finalizar() {
    if (valores.length == 0) {
        alert('Adicione valoeres para finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores
            
            if (valores[pos] > maior) {
                maior =  valores[pos]
            } else if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao total, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior} e o menor informado valor foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `A media dos valores é ${media}`
    }
    
    

    /*let max = Math.max.apply(null, lista)
    let min = Math.min.apply(null, lista)
    let soma = 0
    for(let c = 0; c < lista.length; c++){
        soma += lista[c]
    }
    let t = lista.length
    let media = soma / t
    res.innerHTML = `Ao todo, temos ${lista.length} números cadastrados <br><br>
    O maior valor informado foi ${max} <br><br>
    O menor valor informado foi ${min} <br><br>
    A soma dos valores é ${soma} <br><br>
    A media dos valores digitados é ${media}`


    /*res.innerHTML += `O menor valor informado foi ${}`
    res.innerHTML += `Somando todos os valores, temos ${}`
    res.innerHTML += `A média dos valores digitados é ${}`*/
}