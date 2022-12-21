<template>
  <div class="categories-section container">
    <div class="row">
      <div class="offset-lg-1 col-lg-10 col-12">
        <div class="categories-section__wall row">
          <m-card
            v-for="category in cardsItems"
            :id="category.id"
            :key="category.id"
            :image="category.image || stubBrandImageUrl"
            :title="category.name"
            :link="category.link"
            class="col-3"
          />
          <m-card
            v-for="category in categoriesItems"
            :id="category.id"
            :key="category.id"
            :image="category.image || stubBrandImageUrl"
            :title="category.name"
            :link="'/jewelry/'"
            class="col-3"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-categories-section.scss'
  const stubBrandImageUrl = '/img/logo.svg'

  defineProps({
    categoriesItems: {
      type: Array,
      default: () => [],
    },
  })

  const cardsItems = [
    {
      name: 'Мужские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/brands/watches',
      image: '/img/watches_1.png',
    },
    {
      name: 'Женские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/brands/watches',
      image: '/img/watches_1.png',
    },
    {
      name: 'Новые',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/brands/watches',
      image: '/img/watches_1.png',
    },
    {
      name: 'Подержанные',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/brands/watches',
      image: '/img/watches_1.png',
    },
  ]
</script>

<style lang="scss" scoped>
  .brands-logo__img {
    object-fit: cover;
  }

  .card {
    padding: 36px;
  }
</style>
