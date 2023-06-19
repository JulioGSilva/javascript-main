var lista = ['laranja', 'maçã', 'banana', 'uva'];

var listaUL = document.createElement('ul');

var body = document.getElementsByTagName('body')[0];

body.appendChild(listaUL);

for (var i = 0; i < lista.length; i++) {
    var li = document.createElement('li');
    var txtLi = document.createTextNode(lista[i]);
    li.appendChild(txtLi);
    listaUL.appendChild(li);
}
