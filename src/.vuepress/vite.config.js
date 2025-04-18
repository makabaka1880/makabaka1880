import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-art'],
  },
  build: {
    rollupOptions: {
      external: ['react', 'react-art', 'react-art/shapes/circle'],
    },
  },
  server: {
    cors: true // or specify origins as needed
  }
});