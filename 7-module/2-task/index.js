import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.createModal();

  }

  createModal() {
    this.modalWindow = createElement(`
    <div class="modal">
      <div class="modal__overlay"></div>
      <div class="modal__inner">
        <div class="modal__header">
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>
          <h3 class="modal__title">
          </h3>
        </div>
        <div class="modal__body">
        </div>
      </div>
    </div>`);

    this.escapeModal = (event) => {
      if (event.code !== "Escape") return;
      this.close();
    }

    this.modalWindow.querySelector('.modal__close').addEventListener('click', this.close.bind(this));
    document.addEventListener('keydown', this.escapeModal);
  }

  open() {
    document.body.classList.add('is-modal-open');
    document.body.append(this.modalWindow);
  }

  setTitle(modalTitle) {
    this.modalWindow.querySelector('.modal__title').textContent = modalTitle;
  }

  setBody(node) {
    this.modalWindow.querySelector('.modal__body').append(node);
  }

  close() {
    document.removeEventListener('keydown', this.escapeModal);
    this.modalWindow.remove();
    document.body.classList.remove('is-modal-open');
  }
}
