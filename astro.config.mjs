import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "terser",
    },
  },
  // Configuração de build otimizada
  build: {
    inlineStylesheets: "auto",
  },
});
