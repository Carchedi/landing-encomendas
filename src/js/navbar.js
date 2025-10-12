document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  // Cria overlay para o menu mobile
  let overlay = document.querySelector(".nav-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("nav-overlay");
    document.body.appendChild(overlay);
  }

  if (!hamburger || !navMenu) return;

  function toggleMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    overlay.classList.toggle("active");
  }

  hamburger.addEventListener("click", toggleMenu);

  // Fecha menu ao clicar em link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", toggleMenu);
  });

  // Fecha menu ao clicar fora (overlay)
  overlay.addEventListener("click", toggleMenu);

  // Efeito shadow ao rolar
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  document.querySelector(".logo").addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
