import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { initBurger } from './components/burger';
import { initPopup } from './components/popup';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', () => {
  initPopup();
  initBurger();

  const bannerSlider = new Swiper('.js-slider', {
    slidesPerView: 1,
    modules: [Navigation],
    navigation: {
      nextEl: '.js-slider-next',
      prevEl: '.js-slider-prev',
    },
  });
});
