<template>
  <div
    v-if="onShow === true"
    class="m-catalog-info offset-lg-1 col-lg-10 col-12"
  >
    <h1 v-if="title">{{ title }}</h1>
    <span v-if="onShowCounter === true" class="text-16">
      {{ getCounterString }}
    </span>
    <div v-if="onShowCategories === true" class="m-catalog-info__categories">
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
    <div v-if="onShowBookmark === true" class="link-button">
      <base-icon name="bookmark"></base-icon>
      <span>Сохранить запрос</span>
    </div>
  </div>
</template>

<script setup>
  import './m-catalog-info.scss'
  import declOfNum from '@/composables/declOfNum'

  const props = defineProps({
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
    onShow: {
      type: Boolean,
      default: true,
    },
    onShowCounter: {
      type: Boolean,
      default: true,
    },
    onShowCategories: {
      type: Boolean,
      default: true,
    },
    onShowBookmark: {
      type: Boolean,
      default: true,
    },
  })

  const getCounterString = computed(() =>
    declOfNum(props.count, [
      `Найден ${props.count} товар`,
      `Найдено ${props.count} товара`,
      `Найдено ${props.count} товаров`,
    ])
  )
</script>
