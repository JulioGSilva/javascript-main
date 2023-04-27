function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tabu')
    if(num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n1 = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let op = document.createElement('option')
            op.text = `${n1} X ${c} = ${n1*c}`
            op.value = `tab${c}`
            tab.appendChild(op)
            c++
            inner
        }
    }





    /*while(c <= 10) {
        let r = n1 * c
        res.innerHTML += `${r} - `
        c += 1

    }*/
}