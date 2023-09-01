const card = document.getElementById('card');
const botao1 = document.getElementById('b1');
const botao2 = document.getElementById('b2');
const botao3 = document.getElementById('b3');
const botao4 = document.getElementById('b4');
const front = document.getElementById('front');
const back = document.getElementById('back');
var count = 0;
var texts = ['São', 'Paulo', 'Futebol', 'Clube'];

function flip() {
    card.classList.toggle('flip');
    count++;
}

function textos(n) {
    if (count % 2 == 0) {
        //Trás da carta
        back.innerHTML = `<h1>${texts[n]}</h1>`;
        flip();
    } else {
        //Frente da carta
        front.innerHTML = `<h1>${texts[n]}</h1>`;
        flip();
    }
}