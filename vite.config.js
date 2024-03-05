import { resolve } from 'path';
import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';

export default defineConfig({
    root: resolve(__dirname), // Adjust the path if your vite.config.js is not in the project root
    resolve: {
      alias: {
        '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
      }
    },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'), // Default entry point
        anotherPage: resolve(__dirname, 'home/home.html'), // New entry point
      },
    },
  },
  plugins: [
    sass({
      // Specify the output directory for the CSS file
      output: 'dist/css', // Adjust the directory as per your project structure
    }),
  ],
});