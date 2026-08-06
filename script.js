/* ── MOBILE NAV ────────────────────────────────── */

const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');

const closeNav = () => {
    siteNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
};

navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNav);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
});

/* ── SCROLL REVEAL ─────────────────────────────── */

const revealables = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.15 });

    revealables.forEach((el) => observer.observe(el));
} else {
    revealables.forEach((el) => el.classList.add('is-visible'));
}
