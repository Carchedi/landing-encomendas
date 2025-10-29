// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path"; // ESSENCIAL: Importa a função para resolver caminhos

// Configurações do servidor Vite
export default defineConfig({
  // 1. CHAVE: Define o prefixo de URL para o GitHub Pages
  base: "/landing-encomendas/",

  server: {
    host: true, // permite acesso externo
    port: 5173, // porta padrão do Vite
    allowedHosts: [".ngrok-free.app"], // aceita qualquer subdomínio do ngrok
  },

  // 2. SOLUÇÃO DEFINITIVA: Força o Rollup a processar todos os HTMLs
  build: {
    rollupOptions: {
      input: {
        // Ponto de entrada principal
        main: resolve(__dirname, "index.html"),

        // Força o processamento dos seus componentes HTML (para reescrever os caminhos)
        // Incluí os arquivos principais listados em sua estrutura de pasta [cite: 109, 110, 111, 112]
        hero: resolve(__dirname, "src/components/hero.html"),
        sobre: resolve(__dirname, "src/components/sobre.html"),
        funcionalidades: resolve(
          __dirname,
          "src/components/funcionalidades.html"
        ),
        comoFunciona: resolve(__dirname, "src/components/comoFunciona.html"),
        contato: resolve(__dirname, "src/components/contato.html"),

        // Você pode adicionar outros, como os modais, se eles também tiverem imagens diretas no HTML
        // modalAdm: resolve(__dirname, 'src/components/modals/modalAdministracao.html'),
        // modalFunc: resolve(__dirname, 'src/components/modals/modalFuncionarios.html'),
      },
    },
  },
});
