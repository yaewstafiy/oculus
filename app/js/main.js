window.addEventListener('DOMContentLoaded', () => {

  // TABS

  const tabsContent = document.querySelectorAll('.features-tabs__content-item'),
    tabsParent = document.querySelector('.features-tabs__btn'),
    tabs = document.querySelectorAll('.features-tabs__btn-item');

  function hideTabContent() {
    tabsContent.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show-grid', 'fade');
    });

    tabs.forEach(tab => {
      tab.classList.remove('features-tabs__btn-item--active')
    })
  }

  function showTabContent(i = 0) {
    tabsContent[i].classList.add('show-grid', 'fade');
    tabsContent[i].classList.remove('hide');

    tabs[i].classList.add('features-tabs__btn-item--active');

  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('features-tabs__btn-item')) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });


  // BURGER

  const burgerButton = document.querySelector('.burger');
  const overlay = document.querySelector('.overlay');
  const headerLogo = document.querySelector('.header__logo');

  function closeMenu() {
    burgerButton.classList.remove('burger--active');
    overlay.classList.remove('overlay--active');
    document.body.style.overflow = '';
  }

  burgerButton.addEventListener('click', (e) => {
    overlay.classList.toggle('overlay--active');
    burgerButton.classList.toggle('burger--active');
    overlay.prepend(headerLogo);

    if (burgerButton.classList.contains('burger--active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && overlay.classList.contains('overlay--active')) {
      closeMenu();
    }
  });

  // Добавление формы в меню

  const newForm = document.createElement('form');
  newForm.classList.add('menu-form');
  newForm.innerHTML = `
    <div class="menu-form__title">
      Contact us
    </div>
    <input class="menu-form__input" type="email">
    <input class="menu-form__input" type="tel">
    <button class="menu-form__btn" type="submit">Send</button>
  `;
  overlay.append(newForm);

  // Закрытие меню

  // window.addEventListener('click', (e) => {
  //   const target = e.target;
  //   if (
  //     target !== burgerButton &&
  //     target !== overlay &&
  //     target !== headerLogo
  //   ) {
  //     burgerButton.classList.remove('burger--active');
  //     overlay.classList.remove('overlay--active');
  //     document.body.style.overflow = '';
  //   }
  // });



  // ПОТОМ НАДО ЗАКОНЧИТЬ, КАК ПОЙМУ КАК РЕШИТЬ ПРОБЛЕМУ


});

