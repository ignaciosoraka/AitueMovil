let startX, currentX;
const threshold = 50; // Distancia mínima en píxeles para considerar un deslizamiento
const carouselInner = document.querySelector('.carousel-inner');

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    currentX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX - currentX > threshold) {
        nextSlide();
    } else if (currentX - startX > threshold) {
        prevSlide();
    }
}

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
    document.querySelectorAll('.infos').forEach(info => {
        info.classList.remove('active');
    });

    let currentSlide = document.querySelector('input[name="slider"]:checked');
    let slideId = currentSlide.id;
    let infoToShow = document.querySelector(`label[for="${slideId}"] .infos`);
    if (infoToShow) {
        infoToShow.classList.add('active');
    }
}

document.addEventListener('DOMContentLoaded', updateInfos);
document.querySelectorAll('input[name="slider"]').forEach(radio => {
    radio.addEventListener('change', updateInfos);
});

// Agregar eventos táctiles
carouselInner.addEventListener('touchstart', handleTouchStart, false);
carouselInner.addEventListener('touchmove', handleTouchMove, false);
carouselInner.addEventListener('touchend', handleTouchEnd, false);
