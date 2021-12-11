function initCarousel() {
  let carousel = document.querySelector(".carousel");
  let arrowRight = document.querySelector(".carousel__arrow_right");
  let arrowLeft = document.querySelector(".carousel__arrow_left");
  let slider = document.querySelector(".carousel__inner");
  let widthOfCarousel = slider.offsetWidth;
  let step = 0;
  arrowLeft.style.display = 'none';

  carousel.addEventListener("click", makeStep);

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

