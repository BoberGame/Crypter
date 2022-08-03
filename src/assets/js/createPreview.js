'use strict';

const CREATE_PREVIEW_BTN = document.querySelector('.create__preview-btn');

export const changeStyles = (item) => {
  const time = 1000;
  setTimeout(() => {
    item.style.opacity = '1';
    item.style.transform = 'none';
  }, time);
};

if (CREATE_PREVIEW_BTN) {
  const createWindow = {
    createPreview: document.querySelector('.create__preview'),
    createRight: document.querySelector('.create__right'),
  };

  const closePreviewWindow = () => {
    createWindow.createPreview.removeAttribute('style');
    setTimeout(() => {
      createWindow.createRight.classList.remove('active');
      document.body.classList.remove('no-scroll');
    }, 250);
  };

  const closeBtn = document.getElementById('createCloseBtn');
  closeBtn.addEventListener('click', closePreviewWindow);

  CREATE_PREVIEW_BTN.addEventListener('click', (event) => {
    event.preventDefault();
    createWindow.createRight.classList.add('active');
    document.body.classList.add('no-scroll');

    changeStyles(createWindow.createPreview);
  });
}

/* Load */
const CREATE_BTN = document.getElementById('createBtn');

if (CREATE_BTN) {
  CREATE_BTN.addEventListener('click', () => {
    const createLoader = document.querySelector('.create__loading');
    const time = 2000;

    createLoader.classList.add('load-animate');
    setInterval(() => {
      createLoader.classList.remove('load-animate');
    }, time);
  });
}
