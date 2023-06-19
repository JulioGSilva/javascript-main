// setTimeout
console.log('antes do settimeout')

setTimeout(function () {
    console.log('teste...')
}, 2000)

console.log("depois do setTimeout")

// setInterval

var cont = 0

setInterval(function() {

    if (cont <= 3) {
        console.log('teste setInterval')
        cont+=1
    } else {
        clearInterval()
    }
}, 1000);