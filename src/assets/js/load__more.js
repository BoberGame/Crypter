'use strict';

const loadData = {
  get loadMoreBtn() { return document.querySelector('#loadMoreBtn'); },
  get loadMoreBtnProfile() {
    return document.querySelector('#loadMoreBtnProfile');
  },
  requestURL: 'dist/data.html',
  requestURL2: 'dist/data-2.html',
};

const createItem = (data, btn) => {
  btn.classList.add('load-animate');
  setTimeout(() => {
    const itemWrapper = document.querySelector('#loadMoreWrapper');
    const div = document.createElement('div');

    div.innerHTML = data;
    div.classList.add('discovery__wrapper');
    itemWrapper.appendChild(div);
    btn.classList.remove('load-animate');
  }, 600);
};

function sendRequest(method, url, btn) {
  return fetch(url)
    .then((data) => data.text())
    .then((data) => createItem(data, btn));
}

loadData.loadMoreBtn &&
  loadData.loadMoreBtn.addEventListener('click', () => {
    sendRequest('GET', loadData.requestURL, loadData.loadMoreBtn);
  });

loadData.loadMoreBtnProfile &&
  loadData.loadMoreBtnProfile.addEventListener('click', () => {
    sendRequest('GET', loadData.requestURL2, loadData.loadMoreBtnProfile);
  });
