import { defineNuxtConfig } from 'nuxt';
import manifest from './uniform/context-manifest.json';

export default defineNuxtConfig({
  modules: ['@uniformdev/uniform-nuxt'],
  uniform: {
    projectId: process.env.UNIFORM_PROJECT_ID,
    readOnlyApiKey: process.env.UNIFORM_API_KEY,
    manifest,
    defaultConsent: true,
    // uniformContextPath: './uniform/uniform-context-instance.ts',
  },
});
