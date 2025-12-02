import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Vikas_Portfolio/',   // your repo name
  build: {
    outDir: 'docs',            // build directly into docs/
  },
})
