import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import viteSVGLoader from 'vite-svg-loader';

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [vue(), viteSVGLoader()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    server: {
      port: parseInt(process.env.VITE_PORT),
      host: true
    },
    preview: {
      port: parseInt(process.env.VITE_PORT)
    }
  });
};
