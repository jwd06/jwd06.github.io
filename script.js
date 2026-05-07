const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

document.getElementById('view-projects-btn').onclick = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
};

document.getElementById('contact-btn').onclick = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
};
