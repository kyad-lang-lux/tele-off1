import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // On laisse le port par défaut
    port: 5173,
    // On retire le proxy si on utilise l'URL absolue dans api.js
  }
})