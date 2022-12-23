<template>
  <MRangeSlider />
  <div class="price-filter__currency">
    <div class="price-filter__currency-button--group">
      <button type="button" class="button button--square.button--black">
        RUB
      </button>
      <button type="button" class="button button--square.button--gray">
        USD
      </button>
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
</template>

<script setup>
  import './s-good-section-price.scss'
</script>
