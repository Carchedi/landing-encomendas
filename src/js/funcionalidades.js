import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const slideshowWrapper = document.querySelector(".slideshow-wrapper");
  const slides = slideshowWrapper.querySelectorAll(".slide");
  const nextArrow = slideshowWrapper.querySelector(".aNext");
  const prevArrow = slideshowWrapper.querySelector(".aPrev");
  const paginationContainer = slideshowWrapper.querySelector(".pagination");
  let current = 0;
  let interval = null;

  // Cria bullets automaticamente
  slides.forEach((_, i) => {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    if (i === 0) bullet.classList.add("active");
    bullet.addEventListener("click", () => goToSlide(i));
    paginationContainer.appendChild(bullet);
  });

  const bullets = paginationContainer.querySelectorAll(".bullet");

  function goToSlide(index) {
    if (index === current) return;

    const prevSlide = slides[current];
    const nextSlide = slides[index];

    gsap.to(prevSlide, { opacity: 0, duration: 0.8 });
    gsap.to(nextSlide, { opacity: 1, duration: 0.8 });

    gsap.fromTo(
      nextSlide.querySelectorAll(".slide-content > .caption > *"),
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8, delay: 0.2 }
    );

    bullets[current].classList.remove("active");
    bullets[index].classList.add("active");

    current = index;
    resetInterval();
  }

  function nextSlideFunc() {
    let next = current + 1;
    if (next >= slides.length) next = 0;
    goToSlide(next);
  }

  function prevSlideFunc() {
    let prev = current - 1;
    if (prev < 0) prev = slides.length - 1;
    goToSlide(prev);
  }

  nextArrow.addEventListener("click", nextSlideFunc);
  prevArrow.addEventListener("click", prevSlideFunc);

  function startInterval() {
    interval = setInterval(nextSlideFunc, 5000);
  }

  function resetInterval() {
    clearInterval(interval);
    startInterval();
  }

  startInterval();

  // ----------------------------
  // SWIPE TOUCH
  // ----------------------------
  let startX = 0;
  let endX = 0;

  slideshowWrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  slideshowWrapper.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  slideshowWrapper.addEventListener("touchend", () => {
    const threshold = 50; // mínima distância para considerar swipe
    if (startX - endX > threshold) {
      // swipe para esquerda → próximo slide
      nextSlideFunc();
    } else if (endX - startX > threshold) {
      // swipe para direita → slide anterior
      prevSlideFunc();
    }
    // reseta valores
    startX = 0;
    endX = 0;
  });
});
