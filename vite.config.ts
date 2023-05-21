import path from "node:path";

import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Absolute imports
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@style": path.resolve(__dirname, "./src/style"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@services": path.resolve(__dirname, "./src/services"),
    },
  },
});
