// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
import { defineNuxtConfig } from 'nuxt/config'

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
      yandexMetrika: {
        id: process.env.NODE_ENV === 'production'
          ? '91882101' : '91891548'
      },
      apiBase:
        process.env.NODE_ENV === 'production'
          ? `${process.env.VUE_APP_BASE_URL}/api/v1`
          : 'http://185.20.226.229/api/v1',
    },
  },
})
