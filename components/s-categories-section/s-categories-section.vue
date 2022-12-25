<template>
  <div class="categories-section container">
    <div class="row">
      <div class="offset-lg-1 col-lg-10 col-12">
        <div class="categories-section__wall row">
          <m-card
            v-for="category in categoriesItems"
            :id="category.id"
            :key="category.id"
            :image="category.image || stubBrandImageUrl"
            :title="category.name"
            :link="'/jewelry/'"
            class="col-lg-3 col-md-6 col-12"
          />
          <m-card
            v-for="category in hardcodeItems"
            :id="category.id"
            :key="category.id"
            :image="category.image || stubBrandImageUrl"
            :title="category.name"
            :link="category.link"
            class="col-lg-3 col-md-6 col-12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-categories-section.scss'

  defineProps({
    categoriesItems: {
      type: Array,
      default: () => [],
    },
    hardcodeItems: {
      type: Array,
      default: () => [],
    },
    stubBrandImageUrl: {
      type: String,
      default: '/img/logo.svg',
    }
  })
</script>

<style lang="scss" scoped>
  .brands-logo__img {
    object-fit: cover;
  }

  .card {
    padding: 36px;
  }
</style>
