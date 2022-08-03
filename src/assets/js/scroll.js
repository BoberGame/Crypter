'use strict';

const SCROLL_ITEMS = document.querySelectorAll('[data-scroll]');

if (SCROLL_ITEMS) {
  document.addEventListener('DOMContentLoaded', () => {
    SCROLL_ITEMS.forEach((item) => {
      const scrollBtn = item;
      const scrollData = item.getAttribute('data-scroll');
      const scrollOffsetTop = document.getElementById(scrollData).offsetTop;

      const windowScroll = (event) => {
        event.preventDefault();
        window.scrollTo({
          top: scrollOffsetTop - 250,
          behavior: 'smooth',
        });
      };
      scrollBtn.addEventListener('click', windowScroll);
    });
  });
}
