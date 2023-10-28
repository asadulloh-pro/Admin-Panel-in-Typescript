import * as path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  define: {
    "process.env": {}
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  },
  build: { target: "ESNext" },
  optimizeDeps: {
    esbuildOptions: { target: "ESNext", supported: { bigint: true } }
  },
  plugins: [react(), tsconfigPaths({})],
  server: {
    port: 3038
  }
});
