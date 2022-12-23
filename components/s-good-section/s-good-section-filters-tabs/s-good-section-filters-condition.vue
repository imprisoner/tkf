<template>
  <div class="filter__main">
    <h4 class="filter__subtitle mobile-caret">Популярные категории</h4>
    <div class="filter__popular-list">
      <button
        v-for="popularBrand in getPopularBrands"
        :key="popularBrand"
        :class="[
          'filter__popular-item',
          'button',
          'button--text-sm',
          'button--gray',
        ]"
        type="button"
      >
        {{ popularBrand.label }}
      </button>
    </div>
    <h4 class="filter__subtitle-two">Состояние</h4>
    <div class="filter__options"></div>
  </div>
</template>

<script setup>
  const getPopularBrands = ref([
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
  ])
</script>
