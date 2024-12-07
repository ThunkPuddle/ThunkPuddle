document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');
    const backToTop = document.querySelector('.back-to-top');

    function revealOnScroll() {
        const windowHeight = window.innerHeight;
        const revealPoint = 100;

        reveals.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });

        // Show/Hide Back to Top Button
        if (window.scrollY > 200) {
            backToTop.style.opacity = 1;
        } else {
            backToTop.style.opacity = 0;
        }
    }

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load
});

// Select the Back to Top button
const backToTop = document.querySelector('.back-to-top');

// Listen for scroll events
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('show'); // Show button
    } else {
        backToTop.classList.remove('show'); // Hide button
    }
});

// Smooth scroll back to top
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active'); // Animate the hamburger
    nav.classList.toggle('open');        // Show/hide the menu
});
