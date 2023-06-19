var num = [2, 3, 5, 8];
var alvo = 10

var len = num.length

var res = 0
var cont = 1

for(i=0; i < len; i++) {
    res = num[i] + num[cont]
    if (res == alvo) {
        console.log('foi')
    } else {
        cont ++
        res + num[cont+1]
        if (res == alvo) {
            console.log('foi')
        } else {
            console.log('op')
        }
    }

}