let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

let pos = num.indexOf(9)
if(pos == -1) {
    console.log('Valor não encontrado')
} else {
    console.log(`O valor está na  posição ${pos}`)
}



/*for (let pos in num) {
    console.log(num[pos])
}
for(let i = 0; i < num.length; i++) {
    console.log(`A posição ${i} tem valor ${num[i]}`)
}
console.log(`${num}`)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`O primeiro elemento é ${num[0]}`)*/