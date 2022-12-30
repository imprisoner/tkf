<template>
  <div class="range-slider">
    <div class="range-slider__wrap">
      <label for="a" class="range-slider__label">{{ `${formatFunction?formatFunction(range[0]) : range[0]} ${currency}` }}</label>
      <Slider  :disabled="!range[1]" :classes="{
        tooltip:`slider-tooltip ${tooltipPositionClass}`
      }" v-model="localValue" :min="range[0]" :max="range[1]" :step="step" :format="formatFunction || format" />
      <label for="b" class="range-slider__label">{{ `${formatFunction?formatFunction(range[1]) : range[1]} ${currency}` }}</label>
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
    disabled: {
      type: Boolean,
      default: false
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
    },
    toFixedDigits:{
      type:Number,
      default:0
    },
    step:{
      type:Number,
      default:1
    },
    formatFunction:{
      type: Function,
      default: null
    }
  })
  const emit = defineEmits(['update:modelValue'])

  const tooltipPositionClass = computed(()=>{
    let value = ''
       if (localValue.value[1] >= props.range[1] || localValue.value[1]>=props.range[1]*0.95) {
      value =  value + ' tooltip-translate-right'
    }

     if (localValue.value[0] <= props.range[0] || localValue.value[0]<=props.range[0]+(props.range[1]-props.range[0])*0.05) {
       value =  value + ' tooltip-translate-left'
    }

     return value
  })
  const localValue = computed({
    get() {
      return props.modelValue
    },
    set(newValue) {
      emit('update:modelValue', newValue)
    },
  });
  function format(value) {
    return value.toFixed(props.toFixedDigits)
  }

</script>

<style lang="scss">
  .slider-horizontal .slider-tooltip-top:before {
    display: none;
  }

  .slider-origin {
    &:not(:last-child){
      .tooltip-translate-left {
        transform: translate(0);
      }
    }
      &:last-child {
      .tooltip-translate-right {
        transform: translate(-100%)!important;
      }
    }
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
