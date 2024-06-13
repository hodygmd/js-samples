import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr:
      process.env.CODESANDBOX_SSE || process.env.GITPOD_WORKSPACE_ID
        ? 443
        : undefined,
  },
  build: {
    outDir: 'dist', // Directorio de salida para los archivos construidos
    rollupOptions: {
      input: {
        main: './index.html' // Asegúrate de que Vite sepa cuál es el archivo HTML principal
      }
    }
  }
});
