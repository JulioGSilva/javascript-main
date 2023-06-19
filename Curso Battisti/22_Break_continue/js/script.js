for (var i = 10; i >= 0; i--) {
    console.log(i)

    if (i === 5) {
        break
    }
}

console.log('fim')

// for (var x = 10; x <= 100; x += 10) {
//     console.log(x);
//     if (x === 40) {
//         continue
//     }
//     console.log('testando continue ' + x)
// }

var x = 10;
while (x <= 100) {
    if (x === 60) {
        continue;
    }

    console.log('testando: ' + x)
    
}
