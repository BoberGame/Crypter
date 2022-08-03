'use strict';

const TABS_LIST = document.querySelector('.subnav-tabs__list');
const TABS_BTN = document.querySelectorAll('.tabs__btn');

const compare = (currentBtn, tabs) => {
  const currentBtnActive = currentBtn.classList.contains('active');
  if (!currentBtnActive) {
    tabs.forEach((item) => item.classList.remove('active'));
    currentBtn.classList.add('active');
  }
};

const tabsChangeState = () => {
  TABS_BTN.forEach((currentBtn) => {
    const compareBind = compare.bind(null, currentBtn, TABS_BTN);
    currentBtn.addEventListener('click', compareBind);
  });
  document.querySelector('.tabs__btn').click();
};

TABS_LIST && tabsChangeState();

const filterCompare = (tabsItem, elem, filterClass) => {
  if (tabsItem.dataset['filter'] === 'all') elem.classList.remove('hide');
  else if (elem.dataset['cat'] !== filterClass) elem.classList.add('hide');
  else elem.classList.remove('hide');
};

const filter = (tabsItem) => {
  tabsItem.addEventListener('click', (event) => {
    const filterClass = event.target.dataset['filter'];
    const filterItem = document.querySelectorAll('.hot-bid__item--discovery');

    filterItem.forEach((elem) => {
      filterCompare(tabsItem, elem, filterClass);
    });
  });
};

TABS_BTN.forEach((tabsItem) => {
  filter(tabsItem);
});
