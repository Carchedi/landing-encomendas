/**
 * Inicializa a funcionalidade de acordeão para os cartões da timeline.
 * Procura por todos os elementos .timeline-card e adiciona um evento de clique
 * aos seus botões .timeline-card-toggle.
 */
export function initializeTimeline() {
  const timelineCards = document.querySelectorAll(".timeline-card");

  timelineCards.forEach((card) => {
    const toggleButton = card.querySelector(".timeline-card-toggle");

    if (toggleButton) {
      toggleButton.addEventListener("click", () => {
        // Fecha qualquer outro cartão que esteja aberto
        timelineCards.forEach((otherCard) => {
          if (otherCard !== card) {
            otherCard.classList.remove("active");
          }
        });
        // Alterna o estado (aberto/fechado) do cartão clicado
        card.classList.toggle("active");
      });
    }
  });
}
