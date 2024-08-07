import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['sunflower-antd'], // Explicitly include sunflower-antd if not auto-detected
  },
})
