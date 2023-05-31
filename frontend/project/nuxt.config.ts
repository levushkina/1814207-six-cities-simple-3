// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["assets/css/main.css"],
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  components: {
    global: true,
    dirs: ['~/components']
  },
  vite: {
    devBundler: 'legacy'
  }
})
