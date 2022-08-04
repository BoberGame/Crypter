'use strict';

import {changeStyles} from './createPreview.js';

const BODY = document.body;
const MODAL_CLOSE = document.querySelectorAll('.modal__close, .btn-modal-close');
const MODAL = document.querySelectorAll('.modal');

const closeModal = (currentModal) => {
  const timeout = 250;
  if (MODAL) {
    const modalContent = currentModal.querySelector('.modal__content');
    modalContent.removeAttribute('style');
  }

  setTimeout(() => {
    currentModal.classList.remove('show');
    BODY.classList.remove('no-scroll');
  }, timeout);
};

const modalClick = (targetItem) => {
  const modalId = targetItem.getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal__content');

  modalContent.addEventListener('click', (event) => {
    event.stopPropagation();
  });

  modal.classList.add('show');
  BODY.classList.add('no-scroll');

  changeStyles(modalContent);
};

document.addEventListener('click', (event) => {
  const currentTarget = event.target;

  if (currentTarget.dataset.modal) {
    event.preventDefault();
    modalClick(currentTarget);
  }
});

MODAL_CLOSE.forEach((item) => {
  item.addEventListener('click', (event) => {
    const currentModal = event.currentTarget.closest('.modal');
    MODAL && closeModal(currentModal);
  });
});

MODAL.forEach((item) => {
  item.addEventListener('click', (event) => {
    const currentModal = event.currentTarget;
    MODAL && closeModal(currentModal);
  });
});
