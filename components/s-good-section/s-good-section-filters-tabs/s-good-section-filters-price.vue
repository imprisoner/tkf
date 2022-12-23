<template>
  <div class="filter__main">
    <h4 class="filter__subtitle mobile-caret">Популярные бренды</h4>
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
    <h4 class="filter__subtitle-two">Диапозон цен</h4>
    <div class="filter__options">
      <div class="price-filter__currency">
        <div class="price-filter__currency-button--group">
          <MRangeSlider />
        </div>
        <div class="price-filter__currency-radio-group">
          <label for="" class="radio"></label>
          <input type="radio" name="currency" />
          <div class="radio__wrap">
            <div class="radio__label-text text-16">USD</div>
          </div>
        </div>
        <div class="price-filter__currency-radio-group">
          <label for="" class="radio"></label>
          <input type="radio" name="currency" />
          <div class="radio__wrap">
            <div class="radio__label-text text-16">RUB</div>
          </div>
        </div>
        <fieldset class="filter__range-fields">
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray">min</span>
            <input
              type="text"
              inputmode="number"
              placeholder="40 000 USD"
              class="input-group__field"
            />
          </div>
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray">max</span>
            <input
              type="text"
              inputmode="number"
              placeholder="100 000 USD"
              class="input-group__field"
            />
          </div>
        </fieldset>
      </div>
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
