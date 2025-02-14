const swiper = new Swiper('.mySwiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
      992: {slidesPerView: 3},
      768: {slidesPerView: 2},
      480: {slidesPerView: 1},
    },
});
  
const swiperCat = new Swiper('.slider-cat', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
  
    // Pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    
    breakpoints: {
      992: {slidesPerView: 4},
      768: {slidesPerView: 2},
      480: {slidesPerView: 1},
    },
});