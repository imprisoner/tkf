<template>
  <!--  <div class="filter__popular">-->
  <!--    <h4 class="filter__subtitle mobile-caret show-menu">Популярные бренды</h4>-->
  <!--    <div class="filter__popular-list">-->
  <!--      <button-->
  <!--        v-for="popularBrand in listPopular"-->
  <!--        :key="popularBrand"-->
  <!--        :class="[-->
  <!--          'filter__popular-item',-->
  <!--          'button',-->
  <!--          'button&#45;&#45;text-sm',-->
  <!--          'button&#45;&#45;gray',-->
  <!--          // { active: selected.indexOf(popularBrand.value) >= 0 },-->
  <!--        ]"-->
  <!--        type="button"-->
  <!--      >-->
  <!--        {{ popularBrand.label }}-->
  <!--      </button>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="filter__main">
    <h4 class="filter__subtitle mobile-caret">Выберите пол</h4>
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
  </div>
</template>

<script setup>
  const getPopularBrands = ref([
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
  ])
</script>
