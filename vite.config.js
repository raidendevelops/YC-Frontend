// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {},
    outDir: "dist",
  },
  server: {
    fs: {
      strict: false,
    },
  },
  // Important for SPA routing on static hosting
  base: "./",
});
