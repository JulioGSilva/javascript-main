function verificarPalindromo() {

    var p1 = document.getElementById('resposta');
    var palindromo = p1.value
    var testp = palindromo.split('')
    var o = testp.slice().reverse().join('');
    var res = document.getElementById('res');

    if (palindromo === o) {
        res.innerHTML = `Sim, ${palindromo} é um palíndromo pois continua com o mesmo significado de trás para frente.`;

        res.appendChild(text);
    } else {
        alert(`${palindromo} não é um palindromo, tente novamente.`);
    };
}