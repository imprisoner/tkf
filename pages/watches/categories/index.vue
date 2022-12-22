<template>
  <main id="categories-page" class="catalog">
    <SCatalogTop
      :title="title"
      :btn-show="btnShow"
      :on-show-counter="false"
      :on-show-categories="false"
      :on-show-bookmark="false"
    />
    <SCategoriesSection />
  </main>
</template>

<script setup>
  const title = 'Категории швейцарских часов'
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
