import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return undefined;
          if (/react-dom|\/react\/|react-router-dom/.test(id)) return 'vendor-react';
          if (/framer-motion|gsap/.test(id)) return 'vendor-motion';
          if (
            /@studio-freight\/lenis|react-type-animation|react-parallax-tilt|react-hot-toast|@emailjs\/browser/.test(
              id
            )
          )
            return 'vendor-misc';
          return 'vendor';
        },
      },
    },
  },
});
