<template>
  <div class="range-slider">
    <div class="range-slider__wrap">
      <label for="a" class="range-slider__label">0 USD</label>
      <Slider v-model="value" :format="format" />
      <label for="b" class="range-slider__label">15 500 0000 USD</label>
    </div>
  </div>
</template>

<script setup>
  import './m-range-slider.scss'
  import Slider from '@vueform/slider'
  import '@vueform/slider/themes/default.css'

  const value = [25, 75]

  function format(value) {
    return value.toFixed(2)
  }
</script>

<style lang="scss">
  .slider-horizontal .slider-tooltip-top:before {
    display: none;
  }

  .slider-connect {
    background: #000000;
  }

  .slider-tooltip {
    color: #6e6b7b;
    background: #f8f8f8;
    border-color: #f8f8f8;
  }

  .slider-handle {
    border: 2px solid #82868b;
  }
</style>
