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
      // TODO: подсталвять в зависимости от prod/dev
      apiBase: 'http://185.20.226.229/api/v1',
    },
  },
})
