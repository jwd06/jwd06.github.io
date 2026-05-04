const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active')
}

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const fadeStart = 50;
    const fadeEnd = 200;
    const scrollY = window.scrollY;
    const opacity = 1 - Math.min(Math.max((scrollY - fadeStart) / (fadeEnd - fadeStart), 0), 1);
    header.style.opacity = opacity;
    header.style.pointerEvents = opacity === 0 ? 'none' : 'auto';
});