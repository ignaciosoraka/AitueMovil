function prevSlide() {
    let currentSlide = document.querySelector('input[name="slider"]:checked');
    let prevSlide = currentSlide.previousElementSibling;
    if (!prevSlide || prevSlide.tagName !== 'INPUT') {
        prevSlide = document.querySelector('input[name="slider"]:last-of-type');
    }
    prevSlide.checked = true;
    updateInfos();
}

function nextSlide() {
    let currentSlide = document.querySelector('input[name="slider"]:checked');
    let nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide || nextSlide.tagName !== 'INPUT') {
        nextSlide = document.querySelector('input[name="slider"]:first-of-type');
    }
    nextSlide.checked = true;
    updateInfos();
}

function updateInfos() {
    // Ocultar todas las secciones de información
    document.querySelectorAll('.infos').forEach(info => {
        info.classList.remove('active');
    });
    
    // Mostrar la sección de información correspondiente al slide seleccionado
    let currentSlide = document.querySelector('input[name="slider"]:checked');
    let slideId = currentSlide.id;
    let infoToShow = document.querySelector(`label[for="${slideId}"] .infos`);
    if (infoToShow) {
        infoToShow.classList.add('active');
    }
}

// Inicializar la visualización correcta al cargar la página
document.addEventListener('DOMContentLoaded', updateInfos);

// También actualiza las informaciones cuando se cambia la selección del slider manualmente
document.querySelectorAll('input[name="slider"]').forEach(radio => {
    radio.addEventListener('change', updateInfos);
});