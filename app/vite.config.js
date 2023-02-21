const { resolve } = require("path");
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
    extensions: [".js", ".json"],
  },
  root: resolve("./src"),
  base: "/app",
  server: {
    host: "localhost",
    cors: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  build: {
    outDir: resolve("../assets/dist"),
    manifest: true,
    rollupOptions: {
      input: {
        main: resolve("./src/main.js"),
      },
    },
  },
});
