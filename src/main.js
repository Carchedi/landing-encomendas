// =======================
// CSS
// =======================
import "bulma/css/bulma.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/funcionalidades.css";
import "./styles/sobre.css";
import "./styles/modais.css";
import "./styles/footer.css";
import "./styles/demonstracao.css";
import "./styles/contato.css";

// =======================
// HTML (componentes)
// =======================
import navbar from "./components/navbar.html?raw";
import hero from "./components/hero.html?raw";
import sobre from "./components/sobre.html?raw";
import funcionalidades from "./components/funcionalidades.html?raw";
import footer from "./components/footer.html?raw";
import modalMoradores from "./components/modals/modalMoradores.html?raw";
import modalFuncionarios from "./components/modals/modalFuncionarios.html?raw"; // Certifique-se que este é o novo arquivo para modal 2
import modalAdminstracao from "./components/modals/modalAdministracao.html?raw";
import demonstracao from "./components/demonstracao.html?raw";
import contato from "./components/contato.html?raw";

// Renderizar no DOM
document.querySelector("#app").innerHTML = `
  ${navbar}
  ${hero}
  ${sobre}
  ${funcionalidades}
  ${contato}
  ${footer}
`;

// Adiciona os modais ao final do body para garantir o funcionamento correto
document.body.insertAdjacentHTML("beforeend", modalMoradores);
document.body.insertAdjacentHTML("beforeend", modalFuncionarios);
document.body.insertAdjacentHTML("beforeend", modalAdminstracao);

// =======================
// JS (funcionalidades.js já importa carrossel.js)
// =======================
import "./js/navbar.js";
import "./js/funcionalidades.js";
import "./js/animations.js";
import "./js/sobre.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // inclui JS necessário para modais, tooltips etc
import "./js/demonstracao.js";
import "./js/contato.js";
