import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
  modules: [Navigation, Pagination, Autoplay],
  direction: 'horizontal',
  loop: true,
  autoplay: false,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
