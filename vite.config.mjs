import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import styles from 'rollup-plugin-styles';

import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/

export default defineConfig({
  minify: false,
  plugins: [react()],
  publicDir: false,
  emptyOutDir: true,
  build: {
    outDir: "dist",
    minify: false,
    lib: {
      entry: "src/index.js",
      formats: ['es'],
      fileName: () => 'index.js',
      assetFileNames: 'global.css'
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'global.css',
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugings: [
    styles({
      plugins: [autoprefixer()],
      extract: 'global.css',
    }),
  ],
});