function carregar() {
        //alert('Olá')
        var h = new Date();
        var hora = h.getHours();
        var r = window.document.getElementById('res');
        var cor = window.document.querySelector('body')
        var img = document.getElementById('imagem')
        r.innerHTML = `Olá!, são ${hora} horas`
    
        //menssagem de 'são ${horas}' boa ${noite}//
    
    
        if (hora >= 6 && hora <= 12) {
            cor.style.background = '#dbc4a4'
            img.src = 'imagens/manhã.jpg'
        } else if(hora >= 13 && hora <= 17) {
            cor.style.background = '#bd8661'
            img.src = 'imagens/tarde.jpg'
        } else if(hora > 17 && hora <= 23) {
            cor.style.background = '#4b4688'
            img.src = 'imagens/noite.jpg'
        } else if(hora == 0 && hora < 6) {
            cor.style.background = '#4b4688'
            img.src = 'imagens/noite2.png'
        }    
}
