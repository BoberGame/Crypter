'use strict';

/* FavoriteIcon*/
document.addEventListener('click', (event) => {
  const item = event.target;
  const parentItem = item.parentElement;

  if (item.classList.contains('actions__icon--favorite') ||
    (parentItem.parentElement.classList.contains('actions__icon--favorite'))) {
    item.classList.toggle('active');
    parentItem.parentElement.classList.toggle('active');
  }
});

/* Cookies */
const cookies = document.getElementById('cookies');
const cookiesBtn = document.getElementById('cookiesBtn');

cookiesBtn.addEventListener('click', (event) => {
  event.preventDefault();
  cookies.classList.add('hide');
});
