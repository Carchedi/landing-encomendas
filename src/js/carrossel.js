import Swiper from "swiper/bundle";
import "swiper/css/bundle";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
    on: {
      init: function () {
        updateSlideScale(this);
      },
      slideChange: function () {
        updateSlideScale(this);
      },
    },
  });

  function updateSlideScale(swiperInstance) {
    swiperInstance.slides.forEach((slide) => {
      const isActive = slide.classList.contains("swiper-slide-active");
      slide.style.transform = isActive ? "scale(1)" : "scale(0.85)";
      slide.style.transition = "transform 0.3s";
    });
  }
});
