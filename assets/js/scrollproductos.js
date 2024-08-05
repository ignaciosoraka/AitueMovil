
const container = document.querySelector('.l-section2 .container');
const radios = document.querySelectorAll('input[name="slider"]');
let startX;
let currentSlide = 0;

container.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

container.addEventListener('touchmove', (e) => {
  if (!startX) return;
  const moveX = e.touches[0].clientX;
  const diffX = startX - moveX;

  if (diffX > 50) {
    // swipe left
    currentSlide = (currentSlide + 1) % radios.length;
    radios[currentSlide].checked = true;
    startX = null;
  } else if (diffX < -50) {
    // swipe right
    currentSlide = (currentSlide - 1 + radios.length) % radios.length;
    radios[currentSlide].checked = true;
    startX = null;
  }
});

