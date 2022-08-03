'use strict';

/* Popular Swiper */
const swiper = new Swiper('.popular__slider-wrapper', {
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: true,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  spaceBetween: 32,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  navigation: {
    nextEl: '.arrow--next--popular',
    prevEl: '.arrow--prev--popular'
  },

  breakpoints: {
    375: {
      slidesPerView: 1.5,
    },

    446: {
      slidesPerView: 2,
    },

    576: {
      slidesPerView: 2.6,
    },

    768: {
      slidesPerView: 3,
    },

    991: {
      slidesPerView: 4,
    },

    1024: {
      slidesPerView: 4,
    },

    1025: {
      slidesPerView: 5,
    }
  },
});



/* HotBid Swiper */
const swiperHotBid = new Swiper('.hot-bid', {
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: false,
    loadPrevNext: false,
  },
  watchSlidesProgress: true,
  watchSlidesVisibility: true,

  spaceBetween: 32,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  breakpoints: {
    375: {
      slidesPerView: 1.4,
    },

    446: {
      slidesPerView: 1.5,
    },

    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2.7,
    },

    991: {
      slidesPerView: 3,
    },

    1024: {
      slidesPerView: 3,
    },

    1025: {
      slidesPerView: 4,
    }
  },

  navigation: {
    nextEl: '.hot-bid-arrow--next',
    prevEl: '.hot-bid-arrow--prev'
  },
});



/* Collections Swiper */
const swiperCollections = new Swiper('.collections__container', {
  spaceBetween: 32,
  loop: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  navigation: {
    nextEl: '.arrow--next--collections',
    prevEl: '.arrow--prev--collections'
  },

  breakpoints: {
    375: {
      slidesPerView: 1,
      enabled: true,
    },

    446: {
      slidesPerView: 1.3,
    },

    576: {
      slidesPerView: 1.8,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 2.5,
      enabled: true,

    },

    1025: {
      slidesPerView: 3,
      enabled: false,
    }
  },
});



/* Discovery Swiper */
const discoveryChangeClass = (data) => {
  data.discoveryContainer.classList.add('swiper');
  data.discoveryWrapper.classList.add('swiper-wrapper');
  data.discoverySlide.forEach((item) => {
    item.classList.add('swiper-slide');
  });
};

function sliderRemove(data, a) {
  data.discoveryContainer.classList.a('swiper');
  data.discoveryWrapper.classList.a('swiper-wrapper');
  data.discoverySlide.forEach((item) => {
    item.classList.a('swiper-slide');
  });
}

const validateSlider = () => {
  const discoveryData = {
    discoveryContainer: document.querySelector('.discovery__container'),
    discoveryWrapper: document.querySelector('.discovery__wrapper'),
    discoverySlide: document.querySelectorAll('.hot-bid__item--discovery'),
  };
  const widthWindow = 445;
  if (discoveryData.discoveryContainer) {
    if (Object.keys(discoveryData).length === 3) {
      if (window.innerWidth < widthWindow) {
        discoveryChangeClass(discoveryData);
      }
      else if (discoveryData.discoveryContainer.classList.contains('swiper')) {
        sliderRemove(remove());
      }
    }
  }
};

validateSlider();

const swiperDiscovery = new Swiper('.discovery__container', {
  spaceBetween: 16,
  slidesPerView: 1.2,
  initialSlide: 1,
  centeredSlides: true,
  centerInsufficientSlides: true,
  keyboard: {
    enabled: true,
    pageUpDown: true,
  },

  navigation: {
    nextEl: '.arrow--next--discovery',
    prevEl: '.arrow--prev--discovery'
  },
});



/* Explore Swiper */
const swiperExplore = new Swiper('.explore', {
  spaceBetween: 32,
  slidesPerView: 4,

  breakpoints: {
    375: {
      slidesPerView: 1,
      enabled: true,
    },

    446: {
      slidesPerView: 1.5,
    },

    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 2.5,
    },

    991: {
      slidesPerView: 3.5,
    },

    1024: {
      slidesPerView: 4,
      enabled: false,
    },
  },
});
