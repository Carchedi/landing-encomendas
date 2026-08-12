import "./carrossel.js";

// Dados dos cards e modais
const cardsData = [
  {
    id: "moradores",
    title: "Para Moradores",
    contentCard:
      "Receba notificações instantâneas, agende retiradas e acompanhe o histórico das suas encomendas com total transparência.",
    contentModal:
      "Moradores recebem notificações automáticas, agendam retiradas e acompanham o histórico de forma simples e segura.",
  },
  {
    id: "funcionarios",
    title: "Para Funcionários",
    contentCard:
      "Registre entregas rapidamente, notifique moradores automaticamente e organize o armazenamento com eficiência.",
    contentModal:
      "Funcionários registram encomendas com leitura de código de barras, notificam moradores e gerenciam o armazenamento.",
  },
  {
    id: "admins",
    title: "Para Administradores",
    contentCard:
      "Tenha acesso a relatórios detalhados, controle total de acessos e métricas completas de desempenho do sistema.",
    contentModal:
      "Administradores acompanham relatórios detalhados e métricas de desempenho em um painel inteligente.",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const swiperWrapper = document.querySelector(".mySwiper .swiper-wrapper");
  const modalsContainer = document.getElementById("modals-container");

  // Gerar slides e modais dinamicamente
  cardsData.forEach(({ id, title, contentCard, contentModal }) => {
    // Slide
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.innerHTML = `
      <div class="card">
        <div class="card-content has-text-centered">
          <h3 class="title is-4">${title}</h3>
          <p>${contentCard}</p>
          <button class="button is-link mt-3" data-target="modal-${id}">Saiba mais</button>
        </div>
      </div>
    `;
    swiperWrapper.appendChild(slide);

    // Modal
    const modal = document.createElement("div");
    modal.id = `modal-${id}`;
    modal.className = "modal";
    modal.innerHTML = `
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">${title}</p>
          <button class="delete" aria-label="close"></button>
        </header>
        <section class="modal-card-body">${contentModal}</section>
      </div>
    `;
    modalsContainer.appendChild(modal);
  });

  // Abrir modais
  const buttons = document.querySelectorAll(".button[data-target]");
  const modals = document.querySelectorAll(".modal");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = document.getElementById(btn.dataset.target);
      if (modal) modal.classList.add("is-active");
    });
  });

  // Fechar modais
  modals.forEach((modal) => {
    const closeEls = modal.querySelectorAll(".delete, .modal-background");
    closeEls.forEach((el) =>
      el.addEventListener("click", () => modal.classList.remove("is-active"))
    );
  });
});
