// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { defineNuxtConfig } from 'nuxt/config'

const Y_METRIK_KEY_PROD = '91882101'
const Y_METRIK_KEY_TEST = '91891548'

export default defineNuxtConfig({
  css: ['~/assets/styles/main.scss', 'swiper/scss', 'swiper/scss/scrollbar'],
  ssr: true,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@import "@/assets/styles/global/_variables.scss"; @import "@/assets/styles/global/_mixins.scss";',
        },
      },
    },
    plugins: [
      svgLoader({
        svgoConfig: {
          plugins: [
            {
              name: 'preset-default',
              params: {
                overrides: {
                  removeViewBox: false,
                },
              },
            },
          ],
        },
      }),
    ],
  },
  // build: {
  //   transpile: ['swiper']
  // },
  modules: ['@nuxtjs/device', '@vueuse/nuxt','yandex-metrika-module-nuxt3'],
  device: {
    refreshOnResize: true,
  },
  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: '123',
    // Public keys that are exposed to the client
    public: {
      urlBase:
        process.env.NODE_ENV === 'production'
          ? process.env.VUE_APP_BASE_URL
          : 'http://185.20.226.229/',

      yandexMetrika: {
        id: process.env.NODE_ENV === 'production'
          ? Y_METRIK_KEY_PROD : Y_METRIK_KEY_TEST
      },
      apiBase:
        process.env.NODE_ENV === 'production'
          ? `${process.env.VUE_APP_BASE_URL}/api/v1`
          : 'http://185.20.226.229/api/v1',
    },
  },
})
