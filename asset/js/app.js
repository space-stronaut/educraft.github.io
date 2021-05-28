const burger = document.querySelector('.burger');
const ul = document.querySelector('.navbar-list');

burger.addEventListener('click', function() {
    ul.classList.toggle('active');
})

AOS.init({
    duration : 1200,
    delay : 10
});

const nav = document.querySelector('nav');

window.addEventListener('scroll', function() {
    nav.classList.toggle('sticky', window.scrollY > 10);
})