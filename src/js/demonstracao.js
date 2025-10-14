document.addEventListener("DOMContentLoaded", () => {
  const sectionDemonstracao = document.querySelector("#demonstracao");
  const demoTabContainer = document.querySelector("#demoTab");

  if (!demoTabContainer || !sectionDemonstracao) {
    return;
  }

  // Delegação: escuta eventos hide.bs.tab e shown.bs.tab que bolham
  document.addEventListener("hide.bs.tab", (ev) => {
    try {
      // ev.target é o trigger que está sendo ocultado
      const trigger = ev.target;
      const selector =
        trigger?.getAttribute("data-bs-target") ||
        trigger?.getAttribute("data-target");
      if (!selector) return;

      const pane = document.querySelector(selector);
      if (!pane) return;

      const scrollContainer = pane.querySelector(".demo-scroll-container");
      if (scrollContainer) {
        // Fallback compatível: seta scrollTop = 0 (instantâneo)
        scrollContainer.scrollTop = 0;
        // Também tenta smooth caso suporte
        if ("scrollTo" in scrollContainer) {
          try {
            scrollContainer.scrollTo({ top: 0, behavior: "smooth" });
          } catch (e) {
            /* ignore */
          }
        }
      }
    } catch (err) {
      console.error("[demo] erro em hide.bs.tab handler:", err);
    }
  });

  document.addEventListener("shown.bs.tab", (ev) => {
    try {
      // Ao entrar em uma aba, rola a página até o topo da seção de demonstração
      // Compensa navbar fixa automaticamente (se houver .navbar.fixed-top ou .fixed-top)
      let navbarHeight = 0;
      const navFixed = document.querySelector(".navbar.fixed-top, .fixed-top");
      if (navFixed) {
        navbarHeight = navFixed.getBoundingClientRect().height || 0;
      }

      // calcula a posição exata
      const rect = sectionDemonstracao.getBoundingClientRect();
      const absoluteTop = window.pageYOffset + rect.top;
      const targetScroll = Math.max(0, absoluteTop - navbarHeight - 8); // -8px small gap

      // rolagem suave
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    } catch (err) {
      console.error("[demo] erro em shown.bs.tab handler:", err);
    }
  });
});
