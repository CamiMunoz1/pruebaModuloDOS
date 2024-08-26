
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.getElementById('contactBtn').addEventListener('click', function () {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
});
