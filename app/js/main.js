'use strict';

const tabItem = document.querySelectorAll('.features-tabs__btn-item');
const tabContent = document.querySelectorAll('.features-tabs__content-item');

tabItem.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const button = e.currentTarget.dataset.button;

    tabItem.forEach(item => {
      item.classList.remove('features-tabs__btn-item--active');
    });
    tabContent.forEach(item => {
      item.classList.remove('features-tabs__content-item--active');
    });
    e.currentTarget.classList.add('features-tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('features-tabs__content-item--active');
  });
});