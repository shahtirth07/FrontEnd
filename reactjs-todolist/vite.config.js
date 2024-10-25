import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'components'),
      '@assets': path.resolve(__dirname, 'assets')
    }},
  plugins: [react()],
  
})
