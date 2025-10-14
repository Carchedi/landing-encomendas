document.addEventListener("DOMContentLoaded", () => {
  // -------------------
  // Navegação entre conteúdos
  const navLinks = document.querySelectorAll("#nav-list a");
  const contentItems = document.querySelectorAll(".content-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Oculta todos os conteúdos e remove a classe ativa dos links
      contentItems.forEach((item) => (item.style.display = "none"));
      navLinks.forEach((nav) => nav.classList.remove("is-active"));

      // Mostra o conteúdo alvo
      const targetId = link.getAttribute("data-content");
      const targetContent = document.getElementById(targetId);
      if (targetContent) targetContent.style.display = "block";

      // Marca o link como ativo
      link.classList.add("is-active");
    });
  });

  // -------------------
  // Cards modernos com cascata e hover delay
  const cards = document.querySelectorAll(".card-moderno");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          cards.forEach((card, index) => {
            // Cascata de entrada
            setTimeout(() => card.classList.add("visible"), index * 200);

            // Hover delay relativo
            card.classList.add("hover-delay");
            card.style.transitionDelay = `${index * 0.1}s`;
          });

          observer.disconnect(); // só precisa executar uma vez
        }
      });
    },
    { threshold: 0.2 }
  );

  cards.forEach((card) => observer.observe(card));

  // -------------------
  // Acordeão Horizontal (Demonstração)
  const accordionItems = document.querySelectorAll(
    ".vertical-accordion .accordion-item"
  );

  if (accordionItems.length > 0) {
    // Deixa o primeiro item ativo por padrão
    accordionItems[0].classList.add("active");

    accordionItems.forEach((item) => {
      item.addEventListener("click", () => {
        // Se o item clicado já estiver ativo, não faz nada.
        if (item.classList.contains("active")) {
          return;
        }
        // Remove a classe 'active' de todos os outros itens
        accordionItems.forEach((otherItem) =>
          otherItem.classList.remove("active")
        );
        // Adiciona a classe 'active' ao item clicado
        item.classList.add("active");
      });
    });
  }
});
