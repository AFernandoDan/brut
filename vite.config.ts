import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'Brut',
      formats: ['es', 'cjs'],
      fileName: (format) => (format === 'cjs' ? 'brut.cjs' : 'brut.es.js')
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime']
    }
  }
});