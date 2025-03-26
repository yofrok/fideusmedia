// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    console.log('Fideus Media: scripts cargados correctamente');

    // Ejemplo: animar secciones al hacer scroll (solo básica)
    const fadeElements = document.querySelectorAll('.fade-in-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-700');
        observer.observe(el);
    });
});

