import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function initSwiper() {
  const swiper = new Swiper(".mySwiper", {
    loop: true, // carrossel infinito
    centeredSlides: true,
    slidesPerView: "auto",
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
      0: { slidesPerView: 1, centeredSlides: true },
      768: { slidesPerView: 1, centeredSlides: true },
      1024: { slidesPerView: 3, centeredSlides: true },
    },
    on: {
      init: function () {
        updateSlideScale(this);
      },
      slideChange: function () {
        updateSlideScale(this);
      },
      resize: function () {
        updateSlideScale(this);
      },
    },
  });

  // Função para escala dos slides laterais
  function updateSlideScale(swiperInstance) {
    swiperInstance.slides.forEach((slide) => {
      const isActive = slide.classList.contains("swiper-slide-active");
      slide.style.transform = isActive ? "scale(1)" : "scale(0.85)";
      slide.style.transition = "transform 0.3s";
    });
  }
}
