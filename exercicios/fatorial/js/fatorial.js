function fat() {
    var n = document.getElementById('num').value;
    var num = parseInt(n)
    console.log(num);
    console.log(typeof(num));
    var res = num

    for(i = num - 1; i > 0; i--){
        res *= i
    }

    var anwser = document.getElementById('resposta')
    anwser.innerHTML = `O fatorial de ${num} é ${res}`
    
}