<template>
  <div class="range-slider">
    <div class="range-slider__wrap">
      <label for="a" class="range-slider__label">{{ `${range[0]} ${currency}` }}</label>
      <Slider v-model="localValue" :min="range[0]" :max="range[1]" :format="format" />
      <label for="b" class="range-slider__label">{{ `${range[1]} ${currency}` }}</label>
    </div>
  </div>
</template>

<script setup>
  import './m-range-slider.scss'
  import Slider from '@vueform/slider'
  import '@vueform/slider/themes/default.css'

  const props = defineProps({
    modelValue: {
      type: Array,
      default: () => {
        return [0,100]
      },
    },
    range: {
      type: Array,
      default: () => {
        return [0,100]
      },
    },
    currency:{
      type:String,
      default:'RUB'
    }
  })
  const emit = defineEmits(['update:modelValue'])

  const localValue = computed({
    get() {
      return props.modelValue
    },
    set(newValue) {
      emit('update:modelValue', newValue)
    },
  });
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
