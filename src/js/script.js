document.documentElement.classList.add('js');

const header = document.querySelector('.header');
const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const menuIcon = mobileBtn.querySelector('i');

/* ---------- Menu mobile ---------- */
function setMenu(open) {
    navLinks.classList.toggle('show', open);
    mobileBtn.setAttribute('aria-expanded', String(open));
    mobileBtn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    menuIcon.classList.toggle('ph-list', !open);
    menuIcon.classList.toggle('ph-x', open);
}

mobileBtn.addEventListener('click', () => setMenu(!navLinks.classList.contains('show')));
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
document.addEventListener('click', e => {
    if (navLinks.classList.contains('show') && !header.contains(e.target)) setMenu(false);
});

/* ---------- Header ao rolar ---------- */
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 20);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- Link ativo conforme a seção visível ---------- */
const menuLinks = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        menuLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(section => sectionObserver.observe(section));

/* ---------- Animação de entrada ---------- */
const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    revealObserver.observe(el);
});

/* ---------- Vídeo do YouTube carregado só ao clicar ---------- */
const facade = document.querySelector('.video-facade');
if (facade) {
    facade.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube-nocookie.com/embed/${facade.dataset.videoId}?autoplay=1&rel=0`;
        iframe.title = 'Vídeo de apresentação — SS Soluções em Tecnologia';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.allowFullscreen = true;
        facade.replaceWith(iframe);
    });
}

/* ---------- Ano atual no rodapé ---------- */
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
