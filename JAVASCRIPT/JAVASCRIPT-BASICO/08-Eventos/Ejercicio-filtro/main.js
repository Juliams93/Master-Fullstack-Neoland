const buttons = document.querySelectorAll('.filters button');
const images = document.querySelectorAll('.gallery img');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar clase activa de todos los botones
        buttons.forEach(b => b.classList.remove('active'));
        // Añadir clase activa al botón pulsado
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        images.forEach(img => {
            if (filter === 'all' || img.getAttribute('data-category') === filter) {
                img.style.display = '';
            } else {
                img.style.display = 'none';
            }
        });
    });
});
 