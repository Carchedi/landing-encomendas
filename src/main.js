// =======================
// CSS
// =======================
import "bulma/css/bulma.min.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/funcionalidades.css";
import "./styles/sobre.css";
import "./styles/footer.css";

// =======================
// HTML (componentes)
// =======================
import navbar from "./components/navbar.html?raw";
import hero from "./components/hero.html?raw";
import sobre from "./components/sobre.html?raw";
import funcionalidades from "./components/funcionalidades.html?raw";
import footer from "./components/footer.html?raw";

// Renderizar no DOM
document.querySelector("#app").innerHTML = `
  ${navbar}
  ${hero}
  ${sobre}
  ${funcionalidades}
  ${footer}
`;

// =======================
// JS (funcionalidades.js já importa carrossel.js)
// =======================
import "./js/navbar.js";
import "./js/funcionalidades.js";
import "./js/animations.js";
import "./js/sobre.js";
