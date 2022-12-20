<template>
  <div class="m-catalog-info offset-lg-1 col-lg-10 col-12">
    <h2 v-if="title">{{ title }}</h2>
    <span v-if="count" class="text-16">найдено {{ count }} товаров</span>
    <div class="m-catalog-info__categories">
      <button
        v-for="(category, id) in categories"
        :key="id"
        type="button"
        class="m-catalog-info__category button"
      >
        <span> {{ category.name }} </span>
        <base-icon name="x"></base-icon>
      </button>
    </div>
    <div class="link-button">
      <base-icon name="bookmark"></base-icon>
      <span>Сохранить запрос</span>
    </div>
  </div>
</template>

<script setup>
  import './m-catalog-info.scss'

  defineProps({
    title: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
    categories: {
      type: Array,
      default: () => [],
    },
    btnShow: {
      type: Boolean,
      default: false,
    },
  })
</script>
