<template>
  <div class="filter__main">
    <h4 v-if="isDesktop" class="filter__subtitle-two">Все диаметры</h4>
    <div class="filter__options">

      <div class="price-filter__currency">
        <client-only> <MRangeSlider v-model="currentDiameterRangeValue" :range="diameterRangeLimit" currency="mm" :step="0.1" :to-fixed-digits="1"/>  </client-only>
        <fieldset class="filter__range-fields">
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray" @click="currentDiameterRangeValue=[undefined,currentDiameterRangeValue[1]]">min</span>
            <input
              :value="currentDiameterRangeValue[0]"
              type="text"
              inputmode="number"
              :placeholder="`${diameterRangeLimit[0]} mm`"
              class="input-group__field"
              @input="setCurrentDiameterRangeValue($event.target.value, true)"
            />
          </div>
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray" @click="currentDiameterRangeValue=[currentDiameterRangeValue[0], undefined]">max</span>
            <input
              :value="currentDiameterRangeValue[1]"
              type="text"
              inputmode="number"
              :placeholder="`${diameterRangeLimit[1]} mm`"
              class="input-group__field"
              @input="setCurrentDiameterRangeValue($event.target.value)"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script setup>
import { isDesktop } from '@/utils/queries'
import {useDebounceFn} from "@vueuse/core/index";

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {
      return {}
    },
  },
  aggregations: {
    type: Object,
    default: () => {
      return {}
    }
  }
})

const emits = defineEmits(['update:modelValue'])

const setCurrentDiameterRangeValue = useDebounceFn((value,min=false) => {
  currentDiameterRangeValue.value = min ? [value, currentDiameterRangeValue.value[1]] : [currentDiameterRangeValue.value[0],value]
}, 1000, { maxWait: 5000 })

const rangeValues = computed(()=>{
  const {modelValue, aggregations} = props
  return [modelValue?.diameter_min || aggregations?.diameter_min || 0, modelValue?.diameter_max || aggregations?.diameter_max || 0]
})

const currentDiameterRangeValue = computed({
  get() {
    return rangeValues.value
  },
  set(newValue) {
    const[minValue,maxValue] = newValue

    const newValues = {
      diameter_min: minValue > props.aggregations?.diameter_min && minValue || undefined,
      diameter_max: maxValue < props.aggregations?.diameter_max && maxValue || undefined
    }

    emits('update:modelValue', newValues)
  },
})

const diameterRangeLimit=computed(()=>{
  return [props.aggregations?.diameter_min || 0, props.aggregations?.diameter_max || 0]
})
</script>
