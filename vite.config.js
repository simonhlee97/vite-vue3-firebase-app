import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default () => {
  return defineConfig({
    define: {
      'process.env': {}
    },
    plugins: [vue()],
  });
}
