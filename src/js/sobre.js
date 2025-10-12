// sobre.js
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card-moderno");

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkCards() {
    let delay = 0;
    const delayStep = 150;

    cards.forEach((card) => {
      if (isInViewport(card) && !card.classList.contains("visible")) {
        setTimeout(() => {
          card.classList.add("visible");
        }, delay);
        delay += delayStep;
      }
    });
  }

  checkCards();
  window.addEventListener("scroll", checkCards);
  window.addEventListener("resize", checkCards);
});
