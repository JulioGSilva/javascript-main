
let pessoa = {
    nome:'Julio',
    idade: 21,
    falar: function() {
        console.log('Olá, tudo bem?')
    },
    aniversario: function() {
        this.idade += 1
    }
};

pessoa.falar();
console.log(pessoa.idade);
pessoa.aniversario();
console.log(pessoa.idade);