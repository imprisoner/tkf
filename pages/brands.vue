<template>
  <main id="brands-page" class="catalog">
    <SCatalogTop />
    <SBrandsSection/>
    <SAlphabet />
  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#brands-page {
  .catalog-top {
    margin-bottom: 72px;
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
