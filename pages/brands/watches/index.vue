<template>
  <main id="brands-page" class="catalog">
    <SCatalogTop :title="title" :breadcrumbs="breadcrumbs" :count="brandsItems.length"/>
    <SBrandsSection :brands-cards="brandsItems" />
    <SAlphabet :brands-items="brandsItems"/>
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'

  const breadcrumbs = [
    {
      text: 'Все бренды',
      href: '',
    },
  ]

  const brandsCards = await getBrands({ isShowOnMain: false, brandType: 'WATCH' })
  const brandsItems = brandsCards
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
