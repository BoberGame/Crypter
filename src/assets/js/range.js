'use strict';

const replaceValue = (input, formValue) => {
  const value = input.value;

  formValue.textContent = value + ' ETH';
  formValue.style.left = value * 10 + '%';
  formValue.classList.add('show');
};

const rangeChange = () => {
  const formValue = document.querySelector('.form-value-span');
  const inputRange = document.getElementById('inputRange');

  if (inputRange) {
    inputRange.oninput = (() => replaceValue(inputRange, formValue));
    inputRange.onblur = (() => formValue.classList.remove('show'));
  }
};

rangeChange();
