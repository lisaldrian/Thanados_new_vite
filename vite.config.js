import { defineConfig } from 'vite';
import sass from 'vite-plugin-sass';

export default defineConfig({
  plugins: [
    sass({
      // Specify the output directory for the CSS file
      output: 'dist/css', // Adjust the directory as per your project structure
    }),
  ],
});