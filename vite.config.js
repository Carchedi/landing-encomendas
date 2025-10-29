import { defineConfig } from "vite";

// Configurações do servidor Vite
export default defineConfig({
  base: "/landing-encomendas/",
  server: {
    host: true, // permite acesso externo
    port: 5173, // porta padrão do Vite
    allowedHosts: [".ngrok-free.app"], // aceita qualquer subdomínio do ngrok
  },
  // <-- NOVO: Adicionar esta seção de build
  build: {
    rollupOptions: {
      input: {
        // Garante que o index.html é o ponto de entrada principal,
        // forçando o processamento de todos os assets relativos à raiz.
        main: resolve(__dirname, "index.html"),
      },
    },
  },
});
