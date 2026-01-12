function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const arrowLeft = document.querySelector('.carousel__arrow_left');

  const slides = carouselInner.children;
  const slideCount = slides.length;
  const slideWidth = slides[0].offsetWidth;

  let currentSlide = 0;

  arrowLeft.style.display = 'none';

  arrowRight.addEventListener('click', () => {
    currentSlide++;
    carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    arrowLeft.style.display = '';

    if (currentSlide === slideCount - 1) {
      arrowRight.style.display = 'none';
    }
  });

  arrowLeft.addEventListener('click', () => {
    currentSlide--;
    carouselInner.style.transform = `translateX(-${slideWidth * currentSlide}px)`;

    arrowRight.style.display = '';

    if (currentSlide === 0) {
      arrowLeft.style.display = 'none';
    }
  });
}
