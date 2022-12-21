<template>
  <main id="brands-page" class="catalog">
    <SCatalogTop :title="title" :breadcrumbs="breadcrumbs" />
    <SBrandsSection :brands-cards="brandsMainCards" />
    <SAlphabet />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'

  const breadcrumbs = [
    {
      text: 'Ювелирные украшения',
      href: '/watches/brands',
    },
    {
      text: 'Бренды',
      href: '/brands',
    },
  ]

  const brandsMainCards = await getBrands({ isShowOnMain: true })
  const title = 'Все бренды швейцарских часов'
</script>

<style lang="scss">
  #brands-page {
    .catalog-top {
      margin-bottom: 72px;
      &__title {
        span {
          display: none;
        }
      }
    }

    .brands-section {
      margin: 49px 0 64px;
    }

    @include max-width('md') {
      .catalog-top {
        margin-bottom: 24px;
      }
    }

    .alphabet {
      margin-bottom: 165px;

      @include max-width('md') {
        margin-bottom: 120px;
      }
    }
  }
</style>
