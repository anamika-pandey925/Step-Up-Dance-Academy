import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    hmr: {
      host: 'localhost',
      protocol: 'ws'
    },
  },
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (
              id.includes('three') ||
              id.includes('@react-three') ||
              id.includes('three-stdlib') ||
              id.includes('three-mesh-bvh') ||
              id.includes('troika') ||
              id.includes('camera-controls') ||
              id.includes('suspend-react') ||
              id.includes('its-fine') ||
              id.includes('stats.gl') ||
              id.includes('stats.js') ||
              id.includes('maath') ||
              id.includes('@dimforge') ||
              id.includes('meshline') ||
              id.includes('zustand') ||
              id.includes('bvh')
            ) {
              return 'vendor-three';
            }
            if (id.includes('firebase') || id.includes('@firebase')) {
              return 'vendor-firebase';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-motion';
            }
            if (id.includes('swiper')) {
              return 'vendor-swiper';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-lucide';
            }
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom') || id.includes('scheduler')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})

