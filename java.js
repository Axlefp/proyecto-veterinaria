
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
});

// Navegación con desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });

        // Cierra menú móvil
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuBtn.textContent = '☰';
        }
    });
});

// Validación del formulario de contacto
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        let hasError = false;

        // Limpiar errores anteriores
        [name, email, message].forEach(input => {
            input.style.borderColor = '';
        });

        if (!name.value.trim()) {
            name.style.borderColor = 'red';
            hasError = true;
        }

        if (!email.value.trim() || !email.value.includes('@') || !email.value.includes('.')) {
            email.style.borderColor = 'red';
            hasError = true;
        }

        if (!message.value.trim()) {
            message.style.borderColor = 'red';
            hasError = true;
        }

        if (hasError) {
            alert('Por favor completa todos los campos correctamente.');
            return;
        }

        alert(`Gracias por tu mensaje, ${name.value}. Nos pondremos en contacto contigo pronto.`);
        contactForm.reset();
    });
}

// Animación al hacer scroll (efecto fade-in simple)
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

// Aplicar animación a secciones
document.querySelectorAll('.section, .service-card, .team-card, .mv-card').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});
