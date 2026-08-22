// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Scroll Highlighting Logic (Intersection Observer)
// This is better for performance than 'window.onscroll'
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-link');

const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === entry.target.id) {
                    link.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        navLinks.classList.remove('active'); // Close mobile menu on click
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
 document.querySelectorAll(".cta-btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-4px)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0)";
    });

});