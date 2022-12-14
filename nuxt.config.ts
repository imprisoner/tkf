// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss', 'swiper/scss', 'swiper/scss/scrollbar'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/global/_variables.scss"; @import "@/assets/styles/global/_mixins.scss";',
        },
      },
    },
    plugins: [svgLoader({})],
  },
  // build: {
  //   transpile: ['swiper']
  // },
  modules: ['@nuxtjs/device'],
  device: {
    refreshOnResize: true,
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.VUE_APP_API_BASE_URL || '/api'
    }
  }
})
