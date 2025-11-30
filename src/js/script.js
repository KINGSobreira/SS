const mobileBtn = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');
const header = document.querySelector('header');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    icon.classList.toggle('fa-times');
    icon.classList.toggle('fa-bars');
});

const navLinksItems = document.querySelectorAll('#nav-links a');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    updateActiveLink();
});

function updateActiveLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

const whatsappLinks = document.querySelectorAll('.btn-whatsapp');
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

whatsappLinks.forEach(link => {
    if (isMobile) {
        link.addEventListener('click', function(e) {
            const url = this.href;
            setTimeout(() => {
                if (!document.hidden) {
                    window.open(url, '_blank');
                }
            }, 2000);
        });
    }
});