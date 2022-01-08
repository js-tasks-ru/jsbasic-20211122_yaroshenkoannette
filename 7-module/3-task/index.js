import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.steps = steps;
    this.value = value;
    this.createSlider();
  }

  createSlider() {
    this.elem = createElement(`
    <div class="slider">
      <div class="slider__thumb">
        <span class="slider__value">0</span>
      </div>
      <div class="slider__progress"></div>
      <div class="slider__steps">
      </div>
    </div>`);

    const sliderSteps = this.elem.querySelector('.slider__steps');

    for (let i = 0; i < this.steps; i++) {
      const span = createElement(`<span></span>`);
      const currentSpan = sliderSteps.appendChild(span);
      if (i == 0) currentSpan.classList.add("slider__step-active");
    }
    this.elem.addEventListener('click', this.moveSlider.bind(this));
  }

  moveSlider(event) {
    let left = event.clientX - this.elem.getBoundingClientRect().left;

    let leftRelative = left / this.elem.offsetWidth;
    let segments = this.steps - 1;
    let approximateValue = leftRelative * segments;
    this.value = Math.round(approximateValue);
    let valuePercents = this.value / segments * 100;
   
    //change value and active step
    this.elem.querySelector('.slider__value').textContent = this.value;
    this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
    const spans = document.querySelectorAll('.slider__steps > span');
    let activeSpan = spans[this.value];
    activeSpan.classList.add("slider__step-active");

    //change position of thumb
    const thumb = this.elem.querySelector('.slider__thumb');
    const progress = this.elem.querySelector('.slider__progress');
    let leftPercents = valuePercents;
    thumb.style.left = `${leftPercents}%`;
    progress.style.width = `${leftPercents}%`;

    //custom event
    this.elem.dispatchEvent(
      new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true,
      })
    );
  }
}