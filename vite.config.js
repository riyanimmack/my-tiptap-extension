import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Importing TailwindCSS and Autoprefixer as ES Modules
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
})
