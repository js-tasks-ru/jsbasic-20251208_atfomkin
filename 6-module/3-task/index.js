import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0;

    this.elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-right-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
          ${this.slides.map(slide => `
            <div class="carousel__slide" data-id="${slide.id}">
              <img
                src="/assets/images/carousel/${slide.image}"
                class="carousel__img"
                alt="slide"
              >
              <div class="carousel__caption">
                <span class="carousel__price">€${slide.price.toFixed(2)}</span>
                <div class="carousel__title">${slide.name}</div>
                <button type="button" class="carousel__button">
                  <img src="/assets/images/icons/plus-icon.svg" alt="icon">
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `);

    this.inner = this.elem.querySelector('.carousel__inner');
    this.leftArrow = this.elem.querySelector('.carousel__arrow_left');
    this.rightArrow = this.elem.querySelector('.carousel__arrow_right');

    this.updateArrows();

    this.rightArrow.addEventListener('click', () => {
      this.currentSlide++;
      this.moveCarousel();
    });

    this.leftArrow.addEventListener('click', () => {
      this.currentSlide--;
      this.moveCarousel();
    });

    this.elem.addEventListener('click', (event) => {
      let button = event.target.closest('.carousel__button');
      if (!button) return;

      let slide = button.closest('.carousel__slide');

      this.elem.dispatchEvent(new CustomEvent('product-add', {
        detail: slide.dataset.id,
        bubbles: true
      }));
    });
  }

  moveCarousel() {
    this.inner.style.transform = `translateX(-${this.currentSlide * this.inner.offsetWidth}px)`;
    this.updateArrows();
  }

  updateArrows() {
    this.leftArrow.style.display = this.currentSlide === 0 ? 'none' : '';
    this.rightArrow.style.display =
      this.currentSlide === this.slides.length - 1 ? 'none' : '';
  }
}
