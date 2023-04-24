
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  //показываем кусочек следующего слайда
  slidesPerView: 1,
  //отступ слайдеров
  spaceBetween: 5,

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //   },
  //   567: {
  //     slidesPerView: 2,
  //   },
  //   1100: {
  //     slidesPerView: 3,
  //   },
  // },

  // effect: 'cube',

  // cubeEffect : {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94
  // },
});