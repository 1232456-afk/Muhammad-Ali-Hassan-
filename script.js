// ========================================================
// 1. Scroll Reveal Functionality
// ========================================================
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), i * 80);
        }
    });
}, { threshold: 0.12 });

reveals.forEach(el => revealObserver.observe(el));


// ========================================================
// 2. FIXED: Active Nav Link Highlight (Click + Scroll Combined)
// ========================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

// Highlight badalne ka main function
function changeActiveLink(currentId) {
    navLinks.forEach(a => {
        if (a.getAttribute('href') === '#' + currentId) {
            a.style.color = 'var(--accent)';
        } else {
            a.style.color = '';
        }
    });
}

// A: Jab kisi link par CLICK ho, to foran usay highlight karein (Zabardasti)
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href').replace('#', '');
        changeActiveLink(targetId);
    });
});

// B: Agar user mouse se SCROLL kare, to position ke mutabiq highlight karein
window.addEventListener('scroll', () => {
    let current = '';
    
    // Check karein ke kya user page ke bilkul bottom par hai
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 50);

    if (isAtBottom) {
        current = 'contact';
    } else {
        sections.forEach(s => { 
            if (window.scrollY >= s.offsetTop - 150) { 
                current = s.id; 
            }
        });
    }

    // Agar user manual scroll kar raha hai tabhi yeh chalega
    if (current) {
        changeActiveLink(current);
    }
});


// ========================================================
// 3. Mobile Hamburger Menu Functionality
// ========================================================
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
