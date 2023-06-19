// ClearTimeout

var x = 0;

var myTime = setTimeout(function () {
    console.log('O x é 0');
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTime);
    console.log('O x passou de 0');
};

// clearInterval

var myInterval = setInterval(function () {
    console.log('Imprimindo o resultado...');

}, 500);

setTimeout(function () {
    clearInterval(myInterval);
    console.log('Não precisamos mais repetir.');
}, 2000);