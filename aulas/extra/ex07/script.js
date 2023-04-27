function calcular() {
    let n1 = window.document.getElementById('dist').value
    let n2 = document.getElementById('temp').value
    let div = document.getElementById('res')

    if (n1.lenght == 0 && n2.lenght == 0) {
        alert('Falta de ddados!!')
    } else {
        let dis = Number(n1)
        let temp = Number(n2)
        let velo = dis / temp
        div.innerHTML = `A velocidade média é de ${velo}km/h`
    }



}