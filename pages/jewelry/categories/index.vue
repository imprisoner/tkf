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
      :categories-items="categoriesItems"
      :stub-brand-image-url="stubBrandImageUrl"
    />
  </main>
</template>

<script setup>
  import { getCategories } from '@/api/getCategories'

  const categoriesItems = await getCategories({ inComponent: false })
  const title = 'Категории ювелирных украшений'
  const stubBrandImageUrl = '/img/stub_jewelry.jpg'
  const cardsItems = [
    {
      name: 'Мужские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?gender=MALE',
      image: '/img/stub_jewelry_1.png',
    },
    {
      name: 'Женские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?gender=FEMALE',
      image: '/img/stub_jewelry_2.png',
    },
    {
      name: 'Новые',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?condition=NEW',
      image: '/img/stub_jewelry_3.png',
    },
    {
      name: 'Подержанные',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?condition=USED',
      image: '/img/stub_jewelry_4.png',
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
