function exib(num) {
    console.log('A operação resultou em: ' + num)
}

function soma(a, b, callback) {
    var op = a + b
    callback(op)
}

soma(2, 2, exib);

function mult(a, b) {
    var op = a * b;
    console.log(op);
}

mult(2, 4);