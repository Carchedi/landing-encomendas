// Animação dos cards desktop
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-moderno");
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 200);
  });

  // Acordeão mobile
  const items = document.querySelectorAll(".accordion-item");
  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});
