document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("#nav-list a");
  const contentItems = document.querySelectorAll(".content-item");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // 1. Oculta todos os conteúdos e remove a classe ativa dos links
      contentItems.forEach((item) => {
        item.style.display = "none";
      });
      navLinks.forEach((nav) => {
        nav.classList.remove("is-active");
      });

      // 2. Determina qual conteúdo mostrar (pega o ID do atributo data-content)
      const targetId = link.getAttribute("data-content");
      const targetContent = document.getElementById(targetId);

      // 3. Mostra o conteúdo alvo e ativa o link clicado
      if (targetContent) {
        targetContent.style.display = "block";
      }
      link.classList.add("is-active");
    });
  });
});
