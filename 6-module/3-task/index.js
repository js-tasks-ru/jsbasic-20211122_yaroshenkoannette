import createElement from '../../assets/lib/create-element.js';
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.createCarousel();
    this.currentNumberOfSlide = 0;
    this.arrowRight = this.elem.querySelector(".carousel__arrow_right");
    this.arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    this.showOrHideArrow();
  }

  createCarousel() {
    this.elem = createElement(`
    <div class="carousel">
    <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>

    <div class="carousel__inner"></div>`)

    this.slides.forEach(slide => {
      const component = createElement(`
      <div class="carousel__slide" data-id=${slide.id}>
      <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
      <div class="carousel__caption">
        <span class="carousel__price">€${slide.price.toFixed(2)}</span>
        <div class="carousel__title">${slide.name}</div>
        <button type="button" class="carousel__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    </div>`
      )
      this.elem.querySelector('.carousel__inner').append(component);

    });

    this.elem.addEventListener("click", this.addEvent.bind(this));

  }


  addEvent(event) {
    const slider = this.elem.querySelector(".carousel__inner");

    if (event.target.closest(".carousel__button")) {
      let id = event.target.closest("[data-id]").dataset.id;
      this.elem.dispatchEvent(
        new CustomEvent("product-add", {
          detail: id,
          bubbles: true,
        })
      );
    } else if (event.target.closest('.carousel__arrow') == this.arrowRight) {
      this.currentNumberOfSlide++;
    } else if (event.target.closest('.carousel__arrow') == this.arrowLeft) {
      this.currentNumberOfSlide--;
    }

    slider.style.transform = `translateX(${-this.currentNumberOfSlide * slider.offsetWidth}px)`;
    this.showOrHideArrow();
  }


  showOrHideArrow() {
    if (this.currentNumberOfSlide === this.slides.length - 1) {
      this.arrowRight.style.display = 'none';
    } else if (this.currentNumberOfSlide === 0) {
      this.arrowLeft.style.display = 'none';
    } else {
      this.arrowLeft.style.display = '';
      this.arrowRight.style.display = '';
    }
  }
}   
