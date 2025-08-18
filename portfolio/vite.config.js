import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If you deploy to GitHub Pages at a subpath, set base: '/your-repo-name/'
  base: '/',
})