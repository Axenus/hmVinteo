import { defineConfig } from 'cypress';
// import getspecFiles from 'cypress-gitlab-parallel-runner';

export default defineConfig({
  video: true,
  videoCompression: true,
  defaultCommandTimeout: 25000,
  requestTimeout: 25000,
  pageLoadTimeout: 25000,
  chromeWebSecurity: false,
  responseTimeout: 40000,
  viewportHeight: 900,
  viewportWidth: 1440,

  e2e: {
    baseUrl: 'https://gitflic.ru/auth/login',
  },
});
