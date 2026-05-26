// Scroll reveal functionality
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Smooth active nav link highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { 
        if (window.scrollY >= s.offsetTop - 120) current = s.id; 
    });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
});

// Mobile Hamburger Menu Functionality
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinksContainer = document.getElementById('nav-links');

if (hamburgerBtn && navLinksContainer) {
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
}