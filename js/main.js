// Реализация меню бургер
const menuBurger = document.querySelector('.header__burger');
const navMenu = document.querySelector('.nav');
const body = document.querySelector('body');


menuBurger.onclick = function () {
  body.classList.toggle('lock');
  menuBurger.classList.toggle('header__burger_active');
  navMenu.classList.toggle('nav_active');
}


// Подключение слайдера Swiper
new Swiper('.logos__slider', {
  slidesPerView: 6,
  loop: true,
  autoplay: {
    // Пауза между прокруткой
    delay: 2000,
    // Закончить на последнем слайде
    stopOnLastSlide: false,
    // Отключить после ручного переключения
    disableOnInteraction: false
  },
  speed: 800,
  breakpoints: {
    320: {
      slidesPerView: 2
    },
    480: {
      slidesPerView: 3
    },
    576: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 5
    },
    992: {
      slidesPerView: 6
    }
  }
});