<template>
  <main id="brands-page" class="catalog">
    <SCatalogTop />
    <SBrandsSection :brands-cards="brandsMainCards" />
    <SAlphabet />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'

  const brandsMainCards = await getBrands({ isShowOnMain: true })
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
      margin-bottom: 64px;
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
