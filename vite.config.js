import { defineConfig } from "vite";

// Configurações do servidor Vite
export default defineConfig({
  server: {
    host: true, // permite acesso externo
    port: 5173, // porta padrão do Vite
    allowedHosts: [".ngrok-free.app"], // aceita qualquer subdomínio do ngrok
  },
});
