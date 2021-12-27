import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.render();
    this.ribbonInner;
  }

  render() {
    this.elem = createElement(`
    <div class="ribbon">
      <button class="ribbon__arrow ribbon__arrow_left">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
  
      <nav class="ribbon__inner">
       
      </nav>
  
      <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </button>
    </div>`)


    this.categories.forEach(category => {
      const link = createElement(`<a href="#" class="ribbon__item" data-id=${category.id}>${category.name}</a>`);
      this.ribbonInner = this.elem.querySelector('.ribbon__inner');
      this.ribbonInner.append(link);
    });

    this.elem.addEventListener('click', this.moveRibbon.bind(this));
    this.ribbonInner.addEventListener('click', this.chooseCategory.bind(this));

  }

  moveRibbon(event) {
    if (event.target.closest('.ribbon__arrow_left')) {
      this.ribbonInner.scrollBy(-350, 0);
    } else if (event.target.closest('.ribbon__arrow_right')) {
      this.ribbonInner.scrollBy(350, 0);
    }

    this.ribbonInner.addEventListener('scroll', this.showOrHideArrow.bind(this))
  }

  showOrHideArrow() {
    const arrowLeft = this.elem.querySelector('.ribbon__arrow_left');
    const arrowRight = this.elem.querySelector('.ribbon__arrow_right');
    let scrollLeft = this.ribbonInner.scrollLeft;
    let scrollWidth = this.ribbonInner.scrollWidth;
    let clientWidth = this.ribbonInner.clientWidth;
    let scrollRight = scrollWidth - scrollLeft - clientWidth;
    if (scrollLeft === 0) {
      arrowLeft.classList.remove('ribbon__arrow_visible');
    } else if (scrollRight < 1) {
      arrowRight.classList.remove('ribbon__arrow_visible');
    } else {
      arrowLeft.classList.add('ribbon__arrow_visible');
      arrowRight.classList.add('ribbon__arrow_visible');
    }
  }

  chooseCategory(event) {
    event.preventDefault();
    const target = event.target;
    if (target.tagName != 'A') return;
    const itemActive = this.ribbonInner.querySelector('.ribbon__item_active');
    if (itemActive !== null) {
      itemActive.classList.remove('ribbon__item_active');
    }
    target.classList.add('ribbon__item_active');

    let id = event.target.closest("[data-id]").dataset.id;
    this.elem.dispatchEvent(
      new CustomEvent('ribbon-select', {
        detail: id,
        bubbles: true,
      })
    );
  }
}