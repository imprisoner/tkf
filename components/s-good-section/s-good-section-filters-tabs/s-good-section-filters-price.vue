<template>
  <div class="filter__main">
    <h4 v-if="isDesktop" class="filter__subtitle-two">Диапазон цен</h4>
    <div class="filter__options">
      <div class="price-filter__currency">
        <div class="price-filter__currency-button--group">
          <button
            v-for="item in currencyList"
            :key="item.value"
            type="button"
            :class="[
              'button',
              'button--square',
              item.value === currency.value ? 'button--black' : 'button--gray',
            ]"
            @click="selectCurrency(item)"
          >
            {{ item.label }}
          </button>
        </div>
<client-only>
        <MRangeSlider v-model="currentPriceRangeValue" :range="priceRangeLimit" :currency="currency.label" :format-function="formatMoney"/>
</client-only>
        <fieldset class="filter__range-fields">
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray" @click="currentPriceRangeValue=[undefined,currentPriceRangeValue[1]]">min</span>
            <input
              :value="formatMoney(currentPriceRangeValue[0])"
              type="text"
              inputmode="number"
              :placeholder="`${formatMoney(priceRangeLimit[0])} ${currency.label}`"
              class="input-group__field"
              @input="setCurrentPriceRangeValue($event.target.value, true)"
            />
          </div>
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray" @click="currentPriceRangeValue=[currentPriceRangeValue[0], undefined]">max</span>
            <input
              :value="formatMoney(currentPriceRangeValue[1])"
              type="text"
              inputmode="number"
              :placeholder="`${formatMoney(priceRangeLimit[1])} ${currency.label}`"
              class="input-group__field"
              @input="setCurrentPriceRangeValue($event.target.value)"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDebounceFn } from '@vueuse/core'
import { isDesktop } from '@/utils/queries'
import {formatMoney} from "../../../utils/formatters";

const setCurrentPriceRangeValue = useDebounceFn((value,min=false) => {
  currentPriceRangeValue.value = min ? [value, currentPriceRangeValue.value[1]] : [currentPriceRangeValue.value[0],value]
}, 1000, { maxWait: 5000 })

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

  const currencyList = ref([
    {
      label: 'RUB',
      value: 'rub',
    },
    {
      label: 'USD',
      value: 'usd',
    },
  ])

  const currency = ref(currencyList.value.find(currency => currency.value === `${props.modelValue?.price_usd_min || props.modelValue?.price_usd_max ? 'usd':'rub'}`))

  const currencyIsRub = computed(()=>{
    return currency.value.value === 'rub'
  })

  const rubRangeValues = computed(()=>{
    const {modelValue, aggregations} = props
    return [modelValue?.price_rub_min || aggregations?.price_rub_min || 0, modelValue?.price_rub_max || aggregations?.price_rub_max || 0]
  })

  const usdRangeValues = computed(()=>{
    const {modelValue, aggregations} = props
    return [modelValue?.price_usd_min || aggregations?.price_usd_min || 0, modelValue?.price_usd_max || aggregations?.price_usd_max || 0]
  })

  const currentPriceRangeValue = computed({
    get() {
      return currencyIsRub.value ? rubRangeValues.value : usdRangeValues.value
    },
    set(newValue) {
      const[minValue,maxValue] = newValue
      const isRub = currencyIsRub.value

      const newValues = {
        price_rub_min: isRub && minValue > props.aggregations?.price_rub_min && minValue || undefined,
        price_rub_max: isRub && maxValue < props.aggregations?.price_rub_max && maxValue || undefined,
        price_usd_min: !isRub && minValue > props.aggregations?.price_usd_min && minValue || undefined,
        price_usd_max: !isRub && maxValue < props.aggregations?.price_usd_max && maxValue || undefined,
      }

      emits('update:modelValue', newValues)
    },
  })

  const priceRangeLimit=computed(()=>{
    return currencyIsRub.value ? [props.aggregations?.price_rub_min || 0, props.aggregations?.price_rub_max || 0] : [props.aggregations?.price_usd_min || 0,props.aggregations?.price_usd_max || 0]
  })

  const selectCurrency = (item) => {
    currency.value = item
    const newValues = {
      price_rub_min: undefined,
      price_rub_max: undefined,
      price_usd_min: undefined,
      price_usd_max: undefined,
    }
    emits('update:modelValue', newValues)
  }
</script>
