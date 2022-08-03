'use strict';

const HEADER = document.querySelector('.header');

const clickOutsideArea = (name) => {
  document.addEventListener('click', (event) => {
    const withinBoundaries = event.composedPath().includes(HEADER);
    !withinBoundaries && name.classList.remove('active');
  });
};

const callNotification = () => {
  const notification = HEADER.querySelector('.notification');
  const notificationBtn = HEADER.querySelector('.header__alert');

  notificationBtn.addEventListener('click', (event) => {
    event.preventDefault();
    notification.classList.toggle('active');
  });
  clickOutsideArea(notification);
};

callNotification();

const callProfileHeader = () => {
  const headerProfile = HEADER.querySelector('.header__profile');
  const headerProfileBtn = HEADER.querySelector('.header__connected-img');

  headerProfileBtn.addEventListener('click', (event) => {
    event.preventDefault();
    headerProfile.classList.toggle('active');
  });
  clickOutsideArea(headerProfile);
};

callProfileHeader();

const headerCounter = () => {
  const headerCount = HEADER.querySelector('.header__connected-count');
  const headerBalanceCount = HEADER.querySelector('.header__balance-count');

  const assignment = (a, b) => {
    a.innerHTML = b.innerHTML;
  };
  assignment(headerBalanceCount, headerCount);
};

headerCounter();
