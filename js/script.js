// Smooth scroll to sections
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Me button scroll
document.getElementById('contactBtn').addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});

// Basic form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
