import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// GitHub Pages serves this project at https://<user>.github.io/Immersive-Alchemy/
const base = '/Immersive-Alchemy/'

// SPA fallback: GitHub Pages serves 404.html for unknown paths, so making it a
// copy of index.html lets client-side routes (/services, /contact) work on refresh.
function spa404Fallback() {
  return {
    name: 'spa-404-fallback',
    closeBundle() {
      const out = path.resolve(process.cwd(), 'dist')
      const index = path.join(out, 'index.html')
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.join(out, '404.html'))
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react(), spa404Fallback()],
})
