function tabuada() {
    let num = document.getElementById('num')
    let tab = document.getElementById('tabu')
    if (num.value.length == 0) {
        window.alert('Digite um número para prosseguir com a tabuada')
    } else {
        let n = Number(num.value)
        let r = document.getElementById('res')
        tab.innerHTML = ''
        for(let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.innerText = `${c} X ${n} = ${c*n}`
            tab.append(item)
            
        }
    }
}
