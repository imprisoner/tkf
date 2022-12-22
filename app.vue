<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
  import useSeo from "./composables/useSeo";

  useHead({
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: 'favicons/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png',sizes: '32x32' ,href: 'favicons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16',href: 'favicons/favicon-16x16.png' },
      { rel: 'manifest', href: 'favicons/site.webmanifest' },
      { rel: 'mask-icon', color: '#000000', href: 'favicons/safari-pinned-tab.svg' },
      { rel: 'shortcut icon', href: 'favicons/favicon.ico' }
    ],
    meta:[
      { name: 'msapplication-TileColor', content: '#000000' },
      { name: 'msapplication-TileImage', content: 'favicons/mstile-144x144.png' },
      { name: 'msapplication-config', content: 'favicons/browserconfig.xml' },
      { name: 'theme-color', content: '#ffffff' }
    ],
    ...useSeo(useRoute().name)
  })
</script>
