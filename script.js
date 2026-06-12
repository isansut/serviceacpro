// Preloader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Logic (Simple)
const mobileToggle = document.querySelector('.mobile-toggle');
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        alert('Navigasi Mobile Terbuka! (Gunakan sidebar untuk pengalaman terbaik)');
    });
}

// Reveal Elements on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            entry.target.style.visibility = 'visible';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(el => {
    el.style.visibility = 'hidden';
    revealObserver.observe(el);
});

// Floating WhatsApp Message Timing
setTimeout(() => {
    const waMessage = document.querySelector('.wa-message');
    if (waMessage) {
        waMessage.classList.add('animate__animated', 'animate__bounceInRight');
        waMessage.style.display = 'block';
    }
}, 3000);
