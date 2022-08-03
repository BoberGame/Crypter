'use strict';

const switchReplaceClass = () => {
  const html = document.documentElement;

  if (html.classList.contains('light')) {
    html.classList.remove('light');
    html.classList.add('dark');
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
  }
};

const switchThemeMode = () => {
  const switchInputs = document.querySelectorAll('.form__switchMode');
  switchInputs.forEach(((item) => {
    item.addEventListener('change', switchReplaceClass);
  }));
};

switchThemeMode();
