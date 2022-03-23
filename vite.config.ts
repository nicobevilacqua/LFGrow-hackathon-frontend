import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const isProd = process.env.NODE_ENV === 'production';

let base = '/';
if (isProd) {
  // base = '/hackathon/';
  base = '/';
}

// https://vitejs.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
});
