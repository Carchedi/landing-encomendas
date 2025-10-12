import { gsap } from "gsap";

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides");
  const slides = document.querySelectorAll(".slide");
  const nextArrow = document.querySelector(".aNext");
  const prevArrow = document.querySelector(".aPrev");
  const bulletsContainer = document.querySelector(".pagination");
  const progressBarInner = document.querySelector(".progress-bar-inner");

  let current = 0;
  const slideCount = slides.length;
  const slideDuration = 5000;
  let interval = null;

  // Criar bullets
  slides.forEach((_, i) => {
    const bullet = document.createElement("div");
    bullet.classList.add("bullet");
    if (i === 0) bullet.classList.add("is-active");
    bullet.addEventListener("click", () => goToSlide(i));
    bulletsContainer.appendChild(bullet);
  });

  const bullets = bulletsContainer.querySelectorAll(".bullet");

  function updateSlidePosition() {
    const slideWidth = slides[0].offsetWidth;
    slidesContainer.style.transform = `translateX(-${current * slideWidth}px)`;
    bullets.forEach((b, i) => b.classList.toggle("is-active", i === current));
    resetProgressBar();
  }

  function goToSlide(index) {
    current = index;
    updateSlidePosition();
    resetInterval();
  }

  function nextSlide() {
    current = (current + 1) % slideCount;
    updateSlidePosition();
  }

  function prevSlide() {
    current = (current - 1 + slideCount) % slideCount;
    updateSlidePosition();
  }

  nextArrow.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });
  prevArrow.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });

  function startInterval() {
    interval = setInterval(nextSlide, slideDuration);
    startProgressBar();
  }

  function resetInterval() {
    clearInterval(interval);
    startInterval();
  }

  startInterval();

  // Swipe mobile
  let startX = 0;
  slidesContainer.addEventListener(
    "touchstart",
    (e) => (startX = e.touches[0].clientX)
  );
  slidesContainer.addEventListener("touchmove", (e) => {});
  slidesContainer.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    resetInterval();
  });

  // Barra de progresso
  function startProgressBar() {
    progressBarInner.style.transition = "none";
    progressBarInner.style.width = "0%";
    requestAnimationFrame(() => {
      progressBarInner.style.transition = `width ${slideDuration}ms linear`;
      progressBarInner.style.width = "100%";
    });
  }

  function resetProgressBar() {
    progressBarInner.style.transition = "none";
    progressBarInner.style.width = "0%";
    requestAnimationFrame(() => {
      progressBarInner.style.transition = `width ${slideDuration}ms linear`;
      progressBarInner.style.width = "100%";
    });
  }

  // Atualiza posição ao redimensionar
  window.addEventListener("resize", updateSlidePosition);
  updateSlidePosition();

  // ===================================================================
  // LÓGICA DE PAGINAÇÃO PARA MÚLTIPLOS MODAIS
  // ===================================================================

  // Função que configura a paginação para um único modal
  function setupModalPagination(modalElement) {
    const prevBtn = modalElement.querySelector(".prev-btn");
    const nextBtn = modalElement.querySelector(".next-btn");
    const pages = modalElement.querySelectorAll(".page-content");
    const totalPages = pages.length;
    let currentPage = 1;

    if (!prevBtn || !nextBtn || totalPages === 0) return;

    function updatePagination() {
      // 1. Oculta todas as páginas
      pages.forEach((page) => page.classList.add("hidden"));

      // 2. Mostra a página atual (baseado no índice do array, que é currentPage - 1)
      if (pages[currentPage - 1]) {
        pages[currentPage - 1].classList.remove("hidden");
      }

      // 3. Oculta/Mostra botões de paginação
      prevBtn.classList.toggle("is-invisible", currentPage === 1);
      nextBtn.classList.toggle("is-invisible", currentPage === totalPages);
    }

    nextBtn.addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
      }
    });

    // Garante que a paginação inicie sempre na Página 1 ao abrir o modal
    modalElement.addEventListener("shown.bs.modal", () => {
      currentPage = 1;
      updatePagination();
    });
  }

  // Encontra todos os modais que precisam de paginação e inicializa cada um
  document.querySelectorAll(".modal-paginated").forEach(setupModalPagination);
});
