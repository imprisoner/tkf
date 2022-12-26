<template>
  <main id="brands-page" class="catalog">
    <SCatalogTop
      :title="title"
      :count="brandsCardsTop.length"
      :on-show-counter="false"
      :on-show-categories="false"
      :on-show-bookmark="false"
    />
    <SBrandsSection :brands-cards="brandsCardsTop" />
    <SAlphabet :brands-items="brandsCards" />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'

  const brandsCardsTop = await getBrands({ isShowOnMain: 'true', brandType: 'WATCH', })
  const brandsCards = await getBrands({ isShowOnMain: 'false', brandType: 'WATCH', })
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
