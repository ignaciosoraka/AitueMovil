// Agregar evento de desplazamiento
window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.home__parallax');
    const scrollPosition = window.pageYOffset;

    // Ajustar cada elemento parallax
    parallaxElements.forEach(function(el, index) {
        // Modificar el valor de '0.5' para cambiar la intensidad del parallax
        const speed = 0.5 + index * 0.1;
        el.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});