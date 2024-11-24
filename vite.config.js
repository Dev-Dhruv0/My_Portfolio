import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    include: ['react-type-animation']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-type': ['react-type-animation']
        }
      }
    }
  }
})
