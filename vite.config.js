// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path"; // <-- LINHA ESSENCIAL PARA RESOLVER O ERRO

// Configurações do servidor Vite
export default defineConfig({
  base: "/landing-encomendas/",
  server: {
    host: true, // permite acesso externo
    port: 5173, // porta padrão do Vite
    allowedHosts: [".ngrok-free.app"], // aceita qualquer subdomínio do ngrok
  },
  // Esta seção é a chave para o deploy limpo
  build: {
    rollupOptions: {
      input: {
        // Garante que o index.html é o ponto de entrada principal
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
