import createElement from '../../assets/lib/create-element.js';
debugger
export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.createCarousel();
    this.initCarousel();
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
      this.elem.append(component);
    });
    
    
  }

   initCarousel() {
    let arrowRight = this.elem.querySelector(".carousel__arrow_right");
    let arrowLeft = this.elem.querySelector(".carousel__arrow_left");
    let slider = this.elem.querySelector(".carousel__inner");
    let widthOfCarousel = slider.offsetWidth;
    console.log(widthOfCarousel);
    let step = 0;
    arrowLeft.style.display = 'none';
    this.elem.addEventListener("click", makeStep);
  
    function makeStep(event) {
      if (event.target.closest('.carousel__arrow') == arrowRight){
        step = step - widthOfCarousel;
        slider.style.transform = `translateX(${step}px)`;
      } else if (event.target.closest('.carousel__arrow') == arrowLeft){
        step = step + widthOfCarousel;
        slider.style.transform = `translateX(${step}px)`;
      }
      hideOrShowArrow();
    }
  
    function hideOrShowArrow() {
      if (step === - widthOfCarousel * 3) {
        arrowRight.style.display = 'none';
      } else if (step === 0) {
        arrowLeft.style.display = 'none';
      } else {
        arrowLeft.style.display = '';
        arrowRight.style.display = '';
      }
    }
  }  
}
