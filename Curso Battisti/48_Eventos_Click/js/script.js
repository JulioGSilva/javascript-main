var btn = document.querySelector('#btn');

console.log(btn);

btn.addEventListener('click', function () {
    console.log('clicou')

    console.log(this)

    this.style.color = 'red'
})

function myFunction() {
    alert('foi')
}

function rena() {
    alert('foi 2')
}

