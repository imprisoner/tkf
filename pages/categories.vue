<template>
  <main id="categories-page" class="catalog">
    <SCatalogTop />
    <SCategoriesSection />
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#categories-page {
  .catalog-top {
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
