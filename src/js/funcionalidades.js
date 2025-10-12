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

  const modal = document.getElementById("modal1");
  if (!modal) return;

  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const pageSubtitle = document.getElementById("page-subtitle");

  // Configuração da Paginação
  let currentPage = 1;
  const totalPages = 4;
  const pageTitles = [
    "Página 1 de 4: Conteúdo Principal",
    "Página 2 de 4: Vantagens",
    "Página 3 de 4: Detalhes",
    "Página 4 de 4: Conclusão",
  ];

  function updatePagination() {
    // 1. Oculta todas as páginas de conteúdo (remove a classe hidden)
    document
      .querySelectorAll("#content-container .page-content")
      .forEach((el) => {
        el.classList.add("hidden");
      });

    // 2. Mostra a página atual (remove a classe hidden)
    const currentContent = document.getElementById(
      `page-content-${currentPage}`
    );
    if (currentContent) {
      currentContent.classList.remove("hidden");
    }

    // 3. Atualiza o subtítulo
    pageSubtitle.textContent = pageTitles[currentPage - 1];

    // 4. Habilita/Desabilita botões
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    prevBtn.classList.toggle("disabled", currentPage === 1);
    nextBtn.classList.toggle("disabled", currentPage === totalPages);
  }

  // --- Listeners ---
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
  modal.addEventListener("shown.bs.modal", () => {
    currentPage = 1;
    updatePagination();
  });

  // Chama a função uma vez no início (embora o evento do modal seja mais confiável)
  // updatePagination();
});
