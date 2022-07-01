import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  transpile: ['@uniformdev/canvas-vue', '@uniformdev/context-vue'],
  modules: [
    [
      '@uniformdev/uniform-nuxt',
      {
        projectId: process.env.UNIFORM_PROJECT_ID,
        readOnlyApiKey: process.env.UNIFORM_API_KEY,
        defaultConsent: true,
      },
    ],
  ],
});
