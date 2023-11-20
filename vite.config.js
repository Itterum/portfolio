import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'

export default defineConfig({
  base: '/portfolio/',
  plugins: [solid()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
