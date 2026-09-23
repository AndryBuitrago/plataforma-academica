// Interactividad básica para TaskPet

document.addEventListener('DOMContentLoaded', () => {
    const ctaBtn = document.getElementById('cta-btn');

    ctaBtn.addEventListener('click', () => {
        ctaBtn.textContent = '¡Gracias por tu interés! 🐾';
        ctaBtn.style.background = '#14b8a6';
        ctaBtn.disabled = true;

        // Mensaje temporal
        setTimeout(() => {
            ctaBtn.textContent = 'Próximamente';
            ctaBtn.style.background = '#0f766e';
            ctaBtn.disabled = false;
        }, 2500);
    });

    // Pequeña animación de entrada
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * index);
    });
});