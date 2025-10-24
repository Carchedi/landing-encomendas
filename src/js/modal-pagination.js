document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os modais que precisam de paginação
  const paginatedModals = document.querySelectorAll(".modal-paginated");

  paginatedModals.forEach((modalElement) => {
    const pages = modalElement.querySelectorAll(".page-content");
    const prevBtn = modalElement.querySelector(".prev-btn");
    const nextBtn = modalElement.querySelector(".next-btn");
    const indicatorContainer = modalElement.querySelector(
      ".page-indicator-container"
    );
    const contentContainer = modalElement.querySelector(".content-container");
    let currentPageIndex = 0;

    // === Cria os indicadores em forma de pontos ===
    const createIndicators = () => {
      indicatorContainer.innerHTML = "";
      pages.forEach((_, index) => {
        const indicator = document.createElement("span");
        indicator.classList.add("indicator-dot");
        indicator.setAttribute("aria-label", `Ir para a página ${index + 1}`);
        indicator.addEventListener("click", () => showPage(index));
        indicatorContainer.appendChild(indicator);
      });
    };

    // === Atualiza o estado dos botões e indicadores ===
    const updateButtons = () => {
      prevBtn.hidden = currentPageIndex === 0;
      nextBtn.hidden = currentPageIndex === pages.length - 1;

      // Atualiza o estado visual dos pontinhos
      const indicators = indicatorContainer.querySelectorAll(".indicator-dot");
      indicators.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentPageIndex);
      });
    };

    // === Mostra a página correta ===
    const showPage = (index) => {
      pages.forEach((page) => page.classList.add("hidden"));
      if (pages[index]) {
        pages[index].classList.remove("hidden");
      }
      currentPageIndex = index;
      updateButtons();

      // Rola o conteúdo para o topo ao mudar de página
      if (contentContainer) {
        contentContainer.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    // === Eventos dos botões ===
    nextBtn.addEventListener("click", () => {
      if (currentPageIndex < pages.length - 1) {
        showPage(currentPageIndex + 1);
      }
    });

    prevBtn.addEventListener("click", () => {
      if (currentPageIndex > 0) {
        showPage(currentPageIndex - 1);
      }
    });

    // === Reseta ao abrir o modal ===
    modalElement.addEventListener("show.bs.modal", () => {
      showPage(0);
    });

    // === Inicializa ===
    createIndicators();
    showPage(0);
  });
});
