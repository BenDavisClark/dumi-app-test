import { defineConfig } from 'dumi';

const repo = 'dumi-app-test'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/dist/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/dist/` : '/',
  themeConfig: {
    name: 'dumi-app-test',
  },
});
