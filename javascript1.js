var formulier = document.querySelector('main nav form');
var filterknop = document.querySelector('header i');
var verhaal = document.querySelector('p');
var info = document.querySelector('section i')
var balk = document.getElementById('zoekbalk');
var zoekKnop = document.getElementById('zoekKnop');
filterknop.addEventListener('click', function toggle() {
    formulier.classList.toggle('uit');


});
info.addEventListener('click', function verdwijn() {
    verhaal.classList.toggle('verdwijn');
});
zoekKnop.addEventListener('click', function uitschuiven() {
    balk.classList.toggle('uitZoeken');
});