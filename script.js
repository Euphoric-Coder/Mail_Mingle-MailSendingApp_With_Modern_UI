// JavaScript for your Mail Flow website

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    // Replace this with your form submission logic
    alert('Thank you for submitting the form!');
    contactForm.reset();
});