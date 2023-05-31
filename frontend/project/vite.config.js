import { defineConfig } from 'vite';
//import eslintPlugin from 'vite-plugin-eslint';

const path = require("path");
// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [
  //   eslintPlugin()
  // ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
  },
  
  server: {
    port: 8080,
  }
});
