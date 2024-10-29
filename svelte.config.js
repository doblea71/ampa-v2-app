import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    alias: {
      '$lib': path.resolve('./src/lib'),
      '$assets': path.resolve('./src/assets')
    },
    adapter: adapter({
      fallback: 'index.html',
    //   assets: 'build',
    //   pages: 'build',
    //   precompress: false,
    //   strict: true
    }),
    // paths: {
    //   base: '', // Importante para rutas relativas
    //   assets: '' // Importante para rutas relativas
    // },
    prerender: { 
      entries: [],
    //   handleHttpError: 'warn'
    },
    // trailingSlash: 'never'
  }
};

export default config;
