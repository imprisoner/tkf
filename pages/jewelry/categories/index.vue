<template>
  <main id="categories-page" class="catalog">
    <SCatalogTop
      :title="title"
      :btn-show="btnShow"
      :count="98"
    />
    <SCategoriesSection :categories-items="categoriesItems" />
  </main>
</template>

<script setup>
  import { getCategories } from '@/api/getCategories'
  const categoriesItems = await getCategories()
  const title = 'Категории ювелирных украшений'
  const btnShow = false
</script>

<style lang="scss" scoped>
  #categories-page {
    .s-catalog-top {
      margin-bottom: 72px;
    }

    .categories-section {
      margin-bottom: 260px;
    }

    @include max-width('md') {
      .catalog-top {
        margin-bottom: 24px;
      }

      .categories-section {
        margin-bottom: 80px;
      }
    }
  }
</style>
