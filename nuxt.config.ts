// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@pinia/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Roboto: true
        }
      }
    ]
  ],

  runtimeConfig: {
    public: {
      apiBaseUrl: 'https://cinema-api-test.y-media.io/v1'
    }
  },

  colorMode: {
    preference: 'light'
  },

  ssr: false
})
