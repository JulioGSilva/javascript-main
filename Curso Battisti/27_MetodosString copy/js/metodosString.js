// toLowerCase e toUpperCase

var frase = 'Esta é a frase que vamos manipular';

var caixaAlta = frase.toUpperCase();

console.log(caixaAlta);

console.log(frase.toLocaleLowerCase());

// trim

var nome = '         Julio         ';

var nomeTrim = nome.trim();

console.log(nome);

console.log(nomeTrim);

// split

console.log(frase.split(' '));

var tags = "PHP, JavaScript, HTML, CSS";

console.log(tags.split(', '));

// lastIndexOf

var fraseDois = 'Eu quero a última palavra teste dessa frase de teste';

console.log(fraseDois.indexOf('teste'));

console.log(fraseDois.lastIndexOf('teste'));