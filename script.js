const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const navLinks = [...document.querySelectorAll('[data-nav-link]')];

const closeMenu = () => {
    siteNav.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    document.body.classList.remove('menu-open');
};

menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    document.body.classList.toggle('menu-open', isOpen);
});

navLinks.forEach((link) => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
});

const splitWords = (element) => {
    const label = element.innerText.replace(/\s+/g, ' ').trim();
    const fragment = document.createDocumentFragment();

    [...element.childNodes].forEach((node) => {
        if (node.nodeName === 'BR') {
            fragment.appendChild(document.createElement('br'));
            return;
        }

        if (node.nodeType !== Node.TEXT_NODE) return;

        const words = node.textContent.trim().split(/\s+/).filter(Boolean);
        words.forEach((word, index) => {
            const clip = document.createElement('span');
            const inner = document.createElement('span');
            clip.className = 'word-clip';
            clip.setAttribute('aria-hidden', 'true');
            inner.className = 'word-inner';
            inner.textContent = word;
            clip.appendChild(inner);
            fragment.appendChild(clip);

            if (index < words.length - 1) {
                const space = document.createElement('span');
                space.className = 'word-space';
                space.setAttribute('aria-hidden', 'true');
                fragment.appendChild(space);
            }
        });
    });

    element.textContent = '';
    element.setAttribute('aria-label', label);
    element.appendChild(fragment);
};

const splitIntoAnimatedWords = (element) => {
    const text = element.textContent.trim().replace(/\s+/g, ' ');
    const fragment = document.createDocumentFragment();
    element.setAttribute('aria-label', text);

    text.split(' ').forEach((word, index, words) => {
        const clip = document.createElement('span');
        const inner = document.createElement('span');
        clip.className = 'line-clip';
        clip.setAttribute('aria-hidden', 'true');
        inner.className = 'line-inner';
        inner.textContent = word;
        clip.appendChild(inner);
        fragment.appendChild(clip);

        if (index < words.length - 1) {
            const space = document.createElement('span');
            space.className = 'word-space';
            space.setAttribute('aria-hidden', 'true');
            fragment.appendChild(space);
        }
    });

    element.textContent = '';
    element.appendChild(fragment);
};

document.querySelectorAll('.split-words').forEach(splitWords);
document.querySelectorAll('.split-lines').forEach(splitIntoAnimatedWords);

const showStaticSite = () => {
    document.querySelectorAll('.hero-intro, .reveal-section, [data-project]').forEach((element) => {
        element.style.visibility = 'visible';
        element.style.opacity = '1';
        element.style.transform = 'none';
    });
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!window.gsap || !window.ScrollTrigger || prefersReducedMotion) {
    showStaticSite();
} else {
    gsap.registerPlugin(ScrollTrigger);

    gsap.set('.hero-intro, .reveal-section, [data-project]', { autoAlpha: 1 });

    const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
    intro
        .from('.site-header', { yPercent: -110, duration: 0.8 })
        .from('.hero-topline', { opacity: 0, y: 16, duration: 0.55 }, '-=0.3')
        .from('.hero-title .word-inner', {
            yPercent: 110,
            duration: 1.05,
            stagger: 0.075,
            ease: 'power4.out'
        }, '-=0.25')
        .from('.hero-index', { opacity: 0, y: 20, duration: 0.55 }, '-=0.7')
        .from('.hero-summary, .hero-aside', {
            opacity: 0,
            y: 30,
            duration: 0.75,
            stagger: 0.12
        }, '-=0.6')
        .from('.portrait', { opacity: 0, clipPath: 'inset(100% 0 0 0)', duration: 1 }, '-=0.72')
        .from('.portrait-window img', { scale: 1.18, duration: 1.2 }, '-=1')
        .from('.scroll-cue', { opacity: 0, duration: 0.5 }, '-=0.3');

    gsap.to('.portrait-window img', {
        yPercent: -12,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 0.8
        }
    });

    gsap.to('.hero-title', {
        yPercent: 14,
        opacity: 0.18,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: '35% top',
            end: 'bottom top',
            scrub: true
        }
    });

    gsap.from('.about-statement .line-inner', {
        yPercent: 110,
        duration: 0.85,
        stagger: 0.028,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.about-statement',
            start: 'top 82%',
            once: true
        }
    });

    document.querySelectorAll('.reveal-section').forEach((element) => {
        if (element.closest('.hero')) return;
        gsap.from(element, {
            opacity: 0,
            y: 34,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 88%',
                once: true
            }
        });
    });

    gsap.to('.marquee-track', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.marquee',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
        }
    });

    gsap.from('[data-project]', {
        opacity: 0,
        y: 48,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.project-list',
            start: 'top 82%',
            once: true
        }
    });

    document.querySelectorAll('[data-project]').forEach((project) => {
        const content = project.querySelector('.project-main');
        const arrow = project.querySelector('.project-arrow');

        project.addEventListener('pointerenter', () => {
            gsap.to(content, { x: 8, duration: 0.35, ease: 'power2.out' });
            gsap.to(arrow, { rotate: 45, duration: 0.35, ease: 'power2.out' });
        });

        project.addEventListener('pointerleave', () => {
            gsap.to(content, { x: 0, duration: 0.45, ease: 'power3.out' });
            gsap.to(arrow, { rotate: 0, duration: 0.45, ease: 'power3.out' });
        });
    });

    gsap.from('.contact h2 .word-inner', {
        yPercent: 110,
        rotate: 2,
        duration: 1,
        stagger: 0.065,
        ease: 'power4.out',
        scrollTrigger: {
            trigger: '.contact h2',
            start: 'top 82%',
            once: true
        }
    });

    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (finePointer) {
        document.querySelectorAll('.magnetic').forEach((element) => {
            const moveX = gsap.quickTo(element, 'x', { duration: 0.35, ease: 'power3.out' });
            const moveY = gsap.quickTo(element, 'y', { duration: 0.35, ease: 'power3.out' });

            element.addEventListener('pointermove', (event) => {
                const bounds = element.getBoundingClientRect();
                moveX((event.clientX - bounds.left - bounds.width / 2) * 0.16);
                moveY((event.clientY - bounds.top - bounds.height / 2) * 0.16);
            });

            element.addEventListener('pointerleave', () => {
                moveX(0);
                moveY(0);
            });
        });
    }

    navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'));
        if (!section) return;

        ScrollTrigger.create({
            trigger: section,
            start: 'top 45%',
            end: 'bottom 45%',
            onToggle: ({ isActive }) => link.classList.toggle('is-active', isActive)
        });
    });

    window.addEventListener('load', () => ScrollTrigger.refresh());
}
