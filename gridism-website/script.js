// ============================================
// NAVBAR BEHAVIOR:  Hide on scroll down, show on scroll up
// Glass effect on scroll up, normal when at top
// ============================================

let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
let isAtTop = true;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Check if at top of page
    if (scrollTop <= 50) {
        isAtTop = true;
        navbar.classList. remove('glass', 'hidden');
        navbar.classList.add('normal');
    } else {
        isAtTop = false;
        navbar. classList.remove('normal');
        
        // Scrolling DOWN - hide navbar
        if (scrollTop > lastScrollTop) {
            navbar.classList.add('hidden');
            navbar.classList.remove('glass');
        } 
        // Scrolling UP - show navbar with glass effect
        else {
            navbar.classList.remove('hidden');
            navbar.classList.add('glass');
        }
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 :  scrollTop;
}, false);

// ============================================
// REAL-TIME CLOCK UPDATE
// ============================================

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now. getMinutes()).padStart(2, '0');
    
    const timeElement = document.getElementById('time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}`;
    }
}

updateTime();
setInterval(updateTime, 60000); // Update every minute

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION
// ============================================

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

// ============================================
// GRID LINES PARALLAX EFFECT
// ============================================

const gridLines = document.querySelectorAll('.grid-line');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    gridLines.forEach((line, index) => {
        const speed = 0.3 + (index * 0.1);
        line.style.transform = `translateY(${scrollY * speed}px)`;
    });
});

// ============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================

const observerOptions = {
    threshold:  0.2,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target. style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('. service-item, .feature-card, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(el);
});

console.log('🎯 Gridism - Initialized');