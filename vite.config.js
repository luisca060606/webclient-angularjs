import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    assetsDir: '',
    sourcemap: false,
    minify: true,
  },
  server: {
    port: 9000,
  },  
})
