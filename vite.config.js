// vite.config.js
import { defineConfig } from "vite";

// Configurações do servidor Vite
export default defineConfig({
  base: "/",
  server: {
    host: true,
    port: 5173,
    allowedHosts: [".ngrok-free.app"],
  },
});
