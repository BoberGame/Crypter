/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/button.js":
/*!*********************************!*\
  !*** ./src/assets/js/button.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\n/* FavoriteIcon*/\r\ndocument.addEventListener('click', (event) => {\r\n  const item = event.target;\r\n  const parentItem = item.parentElement;\r\n\r\n  if (item.classList.contains('actions__icon--favorite') ||\r\n    (parentItem.parentElement.classList.contains('actions__icon--favorite'))) {\r\n    item.classList.toggle('active');\r\n    parentItem.parentElement.classList.toggle('active');\r\n  }\r\n});\r\n\r\n/* Cookies */\r\nconst cookies = document.getElementById('cookies');\r\nconst cookiesBtn = document.getElementById('cookiesBtn');\r\n\r\ncookiesBtn.addEventListener('click', (event) => {\r\n  event.preventDefault();\r\n  cookies.classList.add('hide');\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/button.js?");

/***/ }),

/***/ "./src/assets/js/createPreview.js":
/*!****************************************!*\
  !*** ./src/assets/js/createPreview.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeStyles\": function() { return /* binding */ changeStyles; }\n/* harmony export */ });\n\r\n\r\nconst CREATE_PREVIEW_BTN = document.querySelector('.create__preview-btn');\r\n\r\nconst changeStyles = (item) => {\r\n  const time = 200;\r\n  setTimeout(() => {\r\n    item.style.opacity = '1';\r\n    item.style.transform = 'none';\r\n  }, time);\r\n};\r\n\r\n\r\n\r\nif (CREATE_PREVIEW_BTN) {\r\n  const createWindow = {\r\n    createPreview: document.querySelector('.create__preview'),\r\n    createRight: document.querySelector('.create__right'),\r\n  };\r\n\r\n  const closePreviewWindow = () => {\r\n    createWindow.createPreview.removeAttribute('style');\r\n    setTimeout(() => {\r\n      createWindow.createRight.classList.remove('active');\r\n      document.body.classList.remove('no-scroll');\r\n    }, 250);\r\n  };\r\n\r\n  const closeBtn = document.getElementById('createCloseBtn');\r\n  closeBtn.addEventListener('click', closePreviewWindow);\r\n\r\n  CREATE_PREVIEW_BTN.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    createWindow.createRight.classList.add('active');\r\n    document.body.classList.add('no-scroll');\r\n\r\n    changeStyles(createWindow.createPreview);\r\n  });\r\n}\r\n\r\n/* Load */\r\nconst CREATE_BTN = document.getElementById('createBtn');\r\n\r\nif (CREATE_BTN) {\r\n  CREATE_BTN.addEventListener('click', () => {\r\n    const createLoader = document.querySelector('.create__loading');\r\n    const time = 2000;\r\n\r\n    createLoader.classList.add('load-animate');\r\n    setInterval(() => {\r\n      createLoader.classList.remove('load-animate');\r\n    }, time);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/createPreview.js?");

/***/ }),

/***/ "./src/assets/js/filter.js":
/*!*********************************!*\
  !*** ./src/assets/js/filter.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\nconst TABS_LIST = document.querySelector('.subnav-tabs__list');\r\nconst TABS_BTN = document.querySelectorAll('.tabs__btn');\r\n\r\nconst compare = (currentBtn, tabs) => {\r\n  const currentBtnActive = currentBtn.classList.contains('active');\r\n  if (!currentBtnActive) {\r\n    tabs.forEach((item) => item.classList.remove('active'));\r\n    currentBtn.classList.add('active');\r\n  }\r\n};\r\n\r\nconst tabsChangeState = () => {\r\n  TABS_BTN.forEach((currentBtn) => {\r\n    const compareBind = compare.bind(null, currentBtn, TABS_BTN);\r\n    currentBtn.addEventListener('click', compareBind);\r\n  });\r\n  document.querySelector('.tabs__btn').click();\r\n};\r\n\r\nTABS_LIST && tabsChangeState();\r\n\r\nconst filterCompare = (tabsItem, elem, filterClass) => {\r\n  if (tabsItem.dataset['filter'] === 'all') elem.classList.remove('hide');\r\n  else if (elem.dataset['cat'] !== filterClass) elem.classList.add('hide');\r\n  else elem.classList.remove('hide');\r\n};\r\n\r\nconst filter = (tabsItem) => {\r\n  tabsItem.addEventListener('click', (event) => {\r\n    const filterClass = event.target.dataset['filter'];\r\n    const filterItem = document.querySelectorAll('.hot-bid__item--discovery');\r\n\r\n    filterItem.forEach((elem) => {\r\n      filterCompare(tabsItem, elem, filterClass);\r\n    });\r\n  });\r\n};\r\n\r\nTABS_BTN.forEach((tabsItem) => {\r\n  filter(tabsItem);\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/filter.js?");

/***/ }),

/***/ "./src/assets/js/header.js":
/*!*********************************!*\
  !*** ./src/assets/js/header.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\nconst HEADER = document.querySelector('.header');\r\n\r\nconst clickOutsideArea = (name) => {\r\n  document.addEventListener('click', (event) => {\r\n    const withinBoundaries = event.composedPath().includes(HEADER);\r\n    !withinBoundaries && name.classList.remove('active');\r\n  });\r\n};\r\n\r\nconst callNotification = () => {\r\n  const notification = HEADER.querySelector('.notification');\r\n  const notificationBtn = HEADER.querySelector('.header__alert');\r\n\r\n  notificationBtn.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    notification.classList.toggle('active');\r\n  });\r\n  clickOutsideArea(notification);\r\n};\r\n\r\ncallNotification();\r\n\r\nconst callProfileHeader = () => {\r\n  const headerProfile = HEADER.querySelector('.header__profile');\r\n  const headerProfileBtn = HEADER.querySelector('.header__connected-img');\r\n\r\n  headerProfileBtn.addEventListener('click', (event) => {\r\n    event.preventDefault();\r\n    headerProfile.classList.toggle('active');\r\n  });\r\n  clickOutsideArea(headerProfile);\r\n};\r\n\r\ncallProfileHeader();\r\n\r\nconst headerCounter = () => {\r\n  const headerCount = HEADER.querySelector('.header__connected-count');\r\n  const headerBalanceCount = HEADER.querySelector('.header__balance-count');\r\n\r\n  const assignment = (a, b) => {\r\n    a.innerHTML = b.innerHTML;\r\n  };\r\n  assignment(headerBalanceCount, headerCount);\r\n};\r\n\r\nheaderCounter();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/header.js?");

/***/ }),

/***/ "./src/assets/js/load__more.js":
/*!*************************************!*\
  !*** ./src/assets/js/load__more.js ***!
  \*************************************/
/***/ (function() {

eval("\r\n\r\nconst loadData = {\r\n  get loadMoreBtn() { return document.querySelector('#loadMoreBtn'); },\r\n  get loadMoreBtnProfile() {\r\n    return document.querySelector('#loadMoreBtnProfile');\r\n  },\r\n  requestURL: 'data.html',\r\n  requestURL2: 'data-2.html',\r\n};\r\n\r\nconst createItem = (data, btn) => {\r\n  btn.classList.add('load-animate');\r\n  setTimeout(() => {\r\n    const itemWrapper = document.querySelector('#loadMoreWrapper');\r\n    const div = document.createElement('div');\r\n\r\n    div.innerHTML = data;\r\n    div.classList.add('discovery__wrapper');\r\n    itemWrapper.appendChild(div);\r\n    btn.classList.remove('load-animate');\r\n  }, 600);\r\n};\r\n\r\nfunction sendRequest(method, url, btn) {\r\n  return fetch(url)\r\n    .then((data) => data.text())\r\n    .then((data) => createItem(data, btn));\r\n}\r\n\r\nloadData.loadMoreBtn &&\r\n  loadData.loadMoreBtn.addEventListener('click', () => {\r\n    sendRequest('GET', loadData.requestURL, loadData.loadMoreBtn);\r\n  });\r\n\r\nloadData.loadMoreBtnProfile &&\r\n  loadData.loadMoreBtnProfile.addEventListener('click', () => {\r\n    sendRequest('GET', loadData.requestURL2, loadData.loadMoreBtnProfile);\r\n  });\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/load__more.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createPreview_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createPreview.js */ \"./src/assets/js/createPreview.js\");\n\r\n\r\n\r\n\r\nconst BODY = document.body;\r\nconst MODAL_CLOSE = document.querySelectorAll('.modal__close, .btn-modal-close');\r\nconst MODAL = document.querySelectorAll('.modal');\r\n\r\nconst closeModal = (currentModal) => {\r\n  const timeout = 250;\r\n  if (MODAL) {\r\n    const modalContent = currentModal.querySelector('.modal__content');\r\n    modalContent.removeAttribute('style');\r\n  }\r\n\r\n  setTimeout(() => {\r\n    currentModal.classList.remove('show');\r\n    BODY.classList.remove('no-scroll');\r\n  }, timeout);\r\n};\r\n\r\nconst modalClick = (targetItem) => {\r\n  const modalId = targetItem.getAttribute('data-modal');\r\n  const modal = document.getElementById(modalId);\r\n  const modalContent = modal.querySelector('.modal__content');\r\n\r\n  modalContent.addEventListener('click', (event) => {\r\n    event.stopPropagation();\r\n  });\r\n\r\n  modal.classList.add('show');\r\n  BODY.classList.add('no-scroll');\r\n\r\n  (0,_createPreview_js__WEBPACK_IMPORTED_MODULE_0__.changeStyles)(modalContent);\r\n};\r\n\r\ndocument.addEventListener('click', (event) => {\r\n  const currentTarget = event.target;\r\n\r\n  if (currentTarget.dataset.modal) {\r\n    event.preventDefault();\r\n    modalClick(currentTarget);\r\n  }\r\n});\r\n\r\nMODAL_CLOSE.forEach((item) => {\r\n  item.addEventListener('click', (event) => {\r\n    const currentModal = event.currentTarget.closest('.modal');\r\n    MODAL && closeModal(currentModal);\r\n  });\r\n});\r\n\r\nMODAL.forEach((item) => {\r\n  item.addEventListener('click', (event) => {\r\n    const currentModal = event.currentTarget;\r\n    MODAL && closeModal(currentModal);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/range.js":
/*!********************************!*\
  !*** ./src/assets/js/range.js ***!
  \********************************/
/***/ (function() {

eval("\r\n\r\nconst replaceValue = (input, formValue) => {\r\n  const value = input.value;\r\n\r\n  formValue.textContent = value + ' ETH';\r\n  formValue.style.left = value * 10 + '%';\r\n  formValue.classList.add('show');\r\n};\r\n\r\nconst rangeChange = () => {\r\n  const formValue = document.querySelector('.form-value-span');\r\n  const inputRange = document.getElementById('inputRange');\r\n\r\n  if (inputRange) {\r\n    inputRange.oninput = (() => replaceValue(inputRange, formValue));\r\n    inputRange.onblur = (() => formValue.classList.remove('show'));\r\n  }\r\n};\r\n\r\nrangeChange();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/range.js?");

/***/ }),

/***/ "./src/assets/js/scroll.js":
/*!*********************************!*\
  !*** ./src/assets/js/scroll.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\nconst SCROLL_ITEMS = document.querySelectorAll('[data-scroll]');\r\n\r\nif (SCROLL_ITEMS) {\r\n  document.addEventListener('DOMContentLoaded', () => {\r\n    SCROLL_ITEMS.forEach((item) => {\r\n      const scrollBtn = item;\r\n      const scrollData = item.getAttribute('data-scroll');\r\n      const scrollOffsetTop = document.getElementById(scrollData).offsetTop;\r\n\r\n      const windowScroll = (event) => {\r\n        event.preventDefault();\r\n        window.scrollTo({\r\n          top: scrollOffsetTop - 250,\r\n          behavior: 'smooth',\r\n        });\r\n      };\r\n      scrollBtn.addEventListener('click', windowScroll);\r\n    });\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/scroll.js?");

/***/ }),

/***/ "./src/assets/js/select.js":
/*!*********************************!*\
  !*** ./src/assets/js/select.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\nconst select = () => {\r\n  const selectHeader = document.querySelectorAll('.select__header');\r\n  const selectItem = document.querySelectorAll('.select__item');\r\n\r\n  function selectToggle() {\r\n    this.parentElement.classList.toggle('active');\r\n  }\r\n\r\n  function selectChoose() {\r\n    const text = this.innerText;\r\n    const select = this.closest('.select');\r\n    const currentText = select.querySelector('.select__current');\r\n    currentText.innerText = text;\r\n    select.classList.remove('active');\r\n  }\r\n\r\n  selectHeader.forEach((item) => {\r\n    item.addEventListener('click', selectToggle);\r\n  });\r\n\r\n  selectItem.forEach((item) => {\r\n    item.addEventListener('click', selectChoose);\r\n  });\r\n};\r\n\r\nselect();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/select.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval("\r\n\r\n/* Popular Swiper */\r\nconst swiper = new Swiper('.popular__slider-wrapper', {\r\n  preloadImages: false,\r\n  lazy: {\r\n    loadOnTransitionStart: false,\r\n    loadPrevNext: true,\r\n  },\r\n  watchSlidesProgress: true,\r\n  watchSlidesVisibility: true,\r\n\r\n  spaceBetween: 32,\r\n  keyboard: {\r\n    enabled: true,\r\n    pageUpDown: true,\r\n  },\r\n\r\n  navigation: {\r\n    nextEl: '.arrow--next--popular',\r\n    prevEl: '.arrow--prev--popular'\r\n  },\r\n\r\n  breakpoints: {\r\n    375: {\r\n      slidesPerView: 1.5,\r\n    },\r\n\r\n    446: {\r\n      slidesPerView: 2,\r\n    },\r\n\r\n    576: {\r\n      slidesPerView: 2.6,\r\n    },\r\n\r\n    768: {\r\n      slidesPerView: 3,\r\n    },\r\n\r\n    991: {\r\n      slidesPerView: 4,\r\n    },\r\n\r\n    1024: {\r\n      slidesPerView: 4,\r\n    },\r\n\r\n    1025: {\r\n      slidesPerView: 5,\r\n    }\r\n  },\r\n});\r\n\r\n\r\n\r\n/* HotBid Swiper */\r\nconst swiperHotBid = new Swiper('.hot-bid', {\r\n  preloadImages: false,\r\n  lazy: {\r\n    loadOnTransitionStart: false,\r\n    loadPrevNext: false,\r\n  },\r\n  watchSlidesProgress: true,\r\n  watchSlidesVisibility: true,\r\n\r\n  spaceBetween: 32,\r\n  keyboard: {\r\n    enabled: true,\r\n    pageUpDown: true,\r\n  },\r\n\r\n  breakpoints: {\r\n    375: {\r\n      slidesPerView: 1.4,\r\n    },\r\n\r\n    446: {\r\n      slidesPerView: 1.5,\r\n    },\r\n\r\n    576: {\r\n      slidesPerView: 2,\r\n    },\r\n\r\n    768: {\r\n      slidesPerView: 2.7,\r\n    },\r\n\r\n    991: {\r\n      slidesPerView: 3,\r\n    },\r\n\r\n    1024: {\r\n      slidesPerView: 3,\r\n    },\r\n\r\n    1025: {\r\n      slidesPerView: 4,\r\n    }\r\n  },\r\n\r\n  navigation: {\r\n    nextEl: '.hot-bid-arrow--next',\r\n    prevEl: '.hot-bid-arrow--prev'\r\n  },\r\n});\r\n\r\n\r\n\r\n/* Collections Swiper */\r\nconst swiperCollections = new Swiper('.collections__container', {\r\n  spaceBetween: 32,\r\n  loop: true,\r\n  keyboard: {\r\n    enabled: true,\r\n    pageUpDown: true,\r\n  },\r\n\r\n  navigation: {\r\n    nextEl: '.arrow--next--collections',\r\n    prevEl: '.arrow--prev--collections'\r\n  },\r\n\r\n  breakpoints: {\r\n    375: {\r\n      slidesPerView: 1,\r\n      enabled: true,\r\n    },\r\n\r\n    446: {\r\n      slidesPerView: 1.3,\r\n    },\r\n\r\n    576: {\r\n      slidesPerView: 1.8,\r\n    },\r\n\r\n    768: {\r\n      slidesPerView: 2,\r\n    },\r\n\r\n    1024: {\r\n      slidesPerView: 2.5,\r\n      enabled: true,\r\n\r\n    },\r\n\r\n    1025: {\r\n      slidesPerView: 3,\r\n      enabled: false,\r\n    }\r\n  },\r\n});\r\n\r\n\r\n\r\n/* Discovery Swiper */\r\nconst discoveryChangeClass = (data) => {\r\n  data.discoveryContainer.classList.add('swiper');\r\n  data.discoveryWrapper.classList.add('swiper-wrapper');\r\n  data.discoverySlide.forEach((item) => {\r\n    item.classList.add('swiper-slide');\r\n  });\r\n};\r\n\r\nfunction sliderRemove(data, a) {\r\n  data.discoveryContainer.classList.a('swiper');\r\n  data.discoveryWrapper.classList.a('swiper-wrapper');\r\n  data.discoverySlide.forEach((item) => {\r\n    item.classList.a('swiper-slide');\r\n  });\r\n}\r\n\r\nconst validateSlider = () => {\r\n  const discoveryData = {\r\n    discoveryContainer: document.querySelector('.discovery__container'),\r\n    discoveryWrapper: document.querySelector('.discovery__wrapper'),\r\n    discoverySlide: document.querySelectorAll('.hot-bid__item--discovery'),\r\n  };\r\n  const widthWindow = 445;\r\n  if (discoveryData.discoveryContainer) {\r\n    if (Object.keys(discoveryData).length === 3) {\r\n      if (window.innerWidth < widthWindow) {\r\n        discoveryChangeClass(discoveryData);\r\n      }\r\n      else if (discoveryData.discoveryContainer.classList.contains('swiper')) {\r\n        sliderRemove(remove());\r\n      }\r\n    }\r\n  }\r\n};\r\n\r\nvalidateSlider();\r\n\r\nconst swiperDiscovery = new Swiper('.discovery__container', {\r\n  spaceBetween: 16,\r\n  slidesPerView: 1.2,\r\n  initialSlide: 1,\r\n  centeredSlides: true,\r\n  centerInsufficientSlides: true,\r\n  keyboard: {\r\n    enabled: true,\r\n    pageUpDown: true,\r\n  },\r\n\r\n  navigation: {\r\n    nextEl: '.arrow--next--discovery',\r\n    prevEl: '.arrow--prev--discovery'\r\n  },\r\n});\r\n\r\n\r\n\r\n/* Explore Swiper */\r\nconst swiperExplore = new Swiper('.explore', {\r\n  spaceBetween: 32,\r\n  slidesPerView: 4,\r\n\r\n  breakpoints: {\r\n    375: {\r\n      slidesPerView: 1,\r\n      enabled: true,\r\n    },\r\n\r\n    446: {\r\n      slidesPerView: 1.5,\r\n    },\r\n\r\n    576: {\r\n      slidesPerView: 2,\r\n    },\r\n\r\n    768: {\r\n      slidesPerView: 2.5,\r\n    },\r\n\r\n    991: {\r\n      slidesPerView: 3.5,\r\n    },\r\n\r\n    1024: {\r\n      slidesPerView: 4,\r\n      enabled: false,\r\n    },\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/switchTheme.js":
/*!**************************************!*\
  !*** ./src/assets/js/switchTheme.js ***!
  \**************************************/
/***/ (function() {

eval("\r\n\r\nconst switchReplaceClass = () => {\r\n  const html = document.documentElement;\r\n\r\n  if (html.classList.contains('light')) {\r\n    html.classList.remove('light');\r\n    html.classList.add('dark');\r\n  } else {\r\n    html.classList.remove('dark');\r\n    html.classList.add('light');\r\n  }\r\n};\r\n\r\nconst switchThemeMode = () => {\r\n  const switchInputs = document.querySelectorAll('.form__switchMode');\r\n  switchInputs.forEach(((item) => {\r\n    item.addEventListener('change', switchReplaceClass);\r\n  }));\r\n};\r\n\r\nswitchThemeMode();\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/switchTheme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/button.js");
/******/ 	__webpack_require__("./src/assets/js/createPreview.js");
/******/ 	__webpack_require__("./src/assets/js/filter.js");
/******/ 	__webpack_require__("./src/assets/js/header.js");
/******/ 	__webpack_require__("./src/assets/js/load__more.js");
/******/ 	__webpack_require__("./src/assets/js/modal.js");
/******/ 	__webpack_require__("./src/assets/js/range.js");
/******/ 	__webpack_require__("./src/assets/js/scroll.js");
/******/ 	__webpack_require__("./src/assets/js/select.js");
/******/ 	__webpack_require__("./src/assets/js/slider.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/switchTheme.js");
/******/ 	
/******/ })()
;