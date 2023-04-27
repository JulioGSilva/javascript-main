function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('ano').value
    var res = window.document.getElementById('res')
    var idade = ano - fano
    var img = document.createElement('img')
    img.setAttribute('id', 'imagem')

    if (fano == 0 || fano > ano) {
        window.alert('[ERRO] INFORME UM ANO VALIDO')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade <= 3) {
                img.setAttribute('src', 'imagens2/bebe.jpg')
            } else if(idade >= 4 && idade < 14) {
                img.setAttribute('src', 'imagens2/menino.jpg')
            } else if (idade >= 15 && idade < 25) {
                img.setAttribute('src', 'imagens2/adolecentem.jpg')
            } else if (idade >= 26 && idade < 56) {
                img.setAttribute('src', 'imagens2/adulto.jpg')
            } else {
                img.setAttribute('src', 'imagens2/idoso.jpg')
            }

        } else {
            genero = 'Mulher'
            if (idade <= 3) {
                img.setAttribute('src', 'imagens2/bebe.jpg')
            } else if(idade >= 4 && idade < 14) {
                img.setAttribute('src', 'imagens2/criança.jpg')
            } else if (idade >= 15 && idade < 25) {
                img.setAttribute('src', 'imagens2/adolecente.jpg')
            } else if (idade >= 26 && idade < 56) {
                img.setAttribute('src', 'imagens2/adulta.jpg')
            } else {
                img.setAttribute('src', 'imagens2/idosa.jpg')
            }
        }
        img.style.height = '200px'
        img.style.width = '200px'
        img.style.borderRadius = '100%'
        img.style.display = 'block'
        img.style.margin = 'auto'
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
     
}