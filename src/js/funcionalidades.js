document.addEventListener("DOMContentLoaded", () => {
  const accordionItems = document.querySelectorAll(".accordion-item");
  const MOBILE_BREAKPOINT = 900;

  accordionItems.forEach((item) => {
    item.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Fecha todos
      accordionItems.forEach((i) => i.classList.remove("active"));

      // Se não estava ativo, abre
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});
