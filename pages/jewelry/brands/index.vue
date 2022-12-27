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
    <SAlphabet :brands-items="brandsCards"/>
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'
  const config = useRuntimeConfig()
  const { data: brandsCardsTop } = await useFetch(`${config.public.apiBase}/lots/brands/?is_show_on_main=true&brand_type=JEWELRY`)
  const brandsCards = await getBrands({ isShowOnMain: false, brandType: 'JEWELRY' })
  const title = 'Все бренды ювелирных украшений'
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
