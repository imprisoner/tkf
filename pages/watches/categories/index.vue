<template>
  <main id="categories-page" class="catalog">
    <SCatalogTop
      :title="title"
      :btn-show="false"
      :on-show-counter="false"
      :on-show-categories="false"
      :on-show-bookmark="false"
    />
    <SCategoriesSection
      :hardcode-items="cardsItems"
      :stub-brand-image-url="stubBrandImageUrl"
    />
  </main>
</template>

<script setup>
  const title = 'Категории швейцарских часов'
  const stubBrandImageUrl = '/img/stub_watch.jpg'
  const cardsItems = [
    {
      name: 'Мужские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/watches?gender=MALE',
      image: '/img/stub_watch.jpg',
    },
    {
      name: 'Женские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/watches?gender=FEMALE',
      image: '/img/stub_watch.jpg',
    },
    {
      name: 'Новые',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/watches?condition=NEW',
      image: '/img/stub_watch.jpg',
    },
    {
      name: 'Подержанные',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/watches?condition=USED',
      image: '/img/stub_watch.jpg',
    },
  ]
</script>

<style lang="scss" scoped>
  #categories-page {
    .s-catalog-top {
      margin-bottom: 24px;
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
