document.addEventListener("DOMContentLoaded", () => {
  const accordionWrapper = document.querySelector(".accordion-wrapper");
  const accordionItems = document.querySelectorAll(".accordion-item");

  if (!accordionWrapper || accordionItems.length === 0) {
    return; // Sai se os elementos não forem encontrados
  }

  let currentIndex = 0;
  let carouselInterval;
  const DESKTOP_BREAKPOINT = 768; // Alinhado com o CSS

  const activateItem = (index) => {
    // Remove a classe 'active' de todos para parar animações
    accordionItems.forEach((item) => {
      item.classList.remove("active");
    });

    // Força o navegador a refazer o layout, essencial para reiniciar a animação CSS
    // ao readicionar a classe 'active' logo em seguida.
    void accordionItems[index].offsetWidth;

    // Ativa o item correto
    accordionItems[index].classList.add("active");
    currentIndex = index; // Atualiza o índice atual
  };

  const scheduleNext = () => {
    const nextIndex = (currentIndex + 1) % accordionItems.length;
    activateItem(nextIndex);
  };

  const startCarousel = () => {
    // Limpa qualquer intervalo anterior para evitar múltiplos timers
    clearInterval(carouselInterval);

    // Inicia o carrossel apenas em telas maiores que o breakpoint
    if (window.innerWidth > DESKTOP_BREAKPOINT) {
      // A primeira transição acontece após 5s, e as seguintes também.
      // Isso garante que o primeiro item fique visível pelo tempo correto.
      carouselInterval = setInterval(scheduleNext, 5000); // 5 segundos
    }
  };

  const resetCarousel = () => {
    clearInterval(carouselInterval);
    startCarousel();
  };

  accordionItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      const isMobile = window.innerWidth <= DESKTOP_BREAKPOINT;
      const isActive = item.classList.contains("active");

      // Se o item já estiver ativo (em qualquer dispositivo), não faz nada.
      if (isActive) {
        if (!isMobile) resetCarousel(); // No desktop, apenas reinicia o timer
        return; // Sai da função
      }

      activateItem(index);
      if (!isMobile) resetCarousel();
    });
  });

  // Pausa o carrossel ao passar o mouse sobre o wrapper
  accordionWrapper.addEventListener("mouseenter", () => {
    clearInterval(carouselInterval);
  });

  // Retoma o carrossel ao retirar o mouse
  accordionWrapper.addEventListener("mouseleave", () => {
    resetCarousel();
  });

  // Inicia o componente
  // No desktop, o primeiro item começa ativo. No mobile, todos começam fechados.
  if (window.innerWidth > DESKTOP_BREAKPOINT) {
    activateItem(0);
  }
  startCarousel();
  window.addEventListener("resize", startCarousel); // Adapta ao redimensionar a janela
});
