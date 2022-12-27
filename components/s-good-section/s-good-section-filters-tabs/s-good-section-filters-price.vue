<template>
  <div class="filter__main">
    <h4 class="filter__subtitle-two">Диапазон цен</h4>
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

        <MRangeSlider v-model="currentPriceRangeValue" :range="priceRangeLimit" :currency="currency.label"/>
        <fieldset class="filter__range-fields">
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray" @click="currentPriceRangeValue=[undefined,currentPriceRangeValue[1]]">min</span>
            <input
              :value="currentPriceRangeValue[0]"
              type="text"
              inputmode="number"
              :placeholder="`${priceRangeLimit[0]} ${currency.label}`"
              class="input-group__field"
              @input="currentPriceRangeValue=[$event.target.value, currentPriceRangeValue[1]]"
            />
          </div>
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray" @click="currentPriceRangeValue=[currentPriceRangeValue[0], undefined]">max</span>
            <input
              :value="currentPriceRangeValue[1]"
              type="text"
              inputmode="number"
              :placeholder="`${priceRangeLimit[1]} ${currency.label}`"
              class="input-group__field"
              @input="currentPriceRangeValue=[currentPriceRangeValue[0],$event.target.value]"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script setup>
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

  let currency = ref(currencyList.value.find(currency => currency.value === `${props.modelValue?.price_usd_min || props.modelValue?.price_usd_max ? 'usd':'rub'}`))

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
