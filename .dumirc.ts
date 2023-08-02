import { defineConfig } from 'dumi';

const repo = 'dumi-app-test'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  themeConfig: {
    name: 'dumi-app-test',
  },
});
