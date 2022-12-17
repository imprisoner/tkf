<template>
  <main id="categories-page" class="catalog">
    <SCatalogTop
      :breadcrumbs="breadcrumbs"
      :title="title"
      :categories="categories"
      :btnShow="btnShow"
      :count="98"
    />
    <SCategoriesSection />
  </main>
</template>

<script setup>
  const breadcrumbs = [
    {
      text: 'Швейцарские часы',
      href: '',
    }
  ];
  const title = 'Rolex';
  const categories = [
    {
      name: 'Rolex',
    },
    {
      name: 'Rolex',
    },
    {
      name: 'Rolex',
    },
  ];
  const btnShow = false;
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
