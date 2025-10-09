import Swiper from "swiper/bundle";
import "swiper/css/bundle";

export function initSwiper(loop = false) {
  const swiper = new Swiper(".mySwiper", {
    loop: false,
    initialSlide: 0,
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
      type: "bullets", // mantém bullets, mas vamos sobrescrever
      renderBullet: function (index, className) {
        // renderiza só o traço
        return `<span class="${className}">—</span>`;
      },
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
      resize: function () {
        updateSlideScale(this);
      },
    },
  });

  function updateSlideScale(swiperInstance) {
    swiperInstance.slides.forEach((slide) => {
      const isActive = slide.classList.contains("swiper-slide-active");
      slide.style.transform = isActive ? "scale(1.05)" : "scale(0.85)";
      slide.style.transition = "transform 0.3s";
      slide.style.opacity = isActive ? "1" : "0.8";
    });
  }

  // Ocultar botões em telas de toque
  if ("ontouchstart" in window) {
    const prev = document.querySelector(".swiper-button-prev");
    const next = document.querySelector(".swiper-button-next");
    if (prev) prev.style.display = "none";
    if (next) next.style.display = "none";
  }
}
