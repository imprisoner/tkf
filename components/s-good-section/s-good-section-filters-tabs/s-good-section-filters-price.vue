<template>
  <div class="filter__main">
    <!--    <h4 class="filter__subtitle mobile-caret">Выберите диапазон</h4>-->
    <!--    <div class="filter__popular-list">-->
    <!--      <button-->
    <!--        v-for="popularBrand in getPopularBrands"-->
    <!--        :key="popularBrand"-->
    <!--        :class="[-->
    <!--          'filter__popular-item',-->
    <!--          'button',-->
    <!--          'button&#45;&#45;text-sm',-->
    <!--          'button&#45;&#45;gray',-->
    <!--        ]"-->
    <!--        type="button"-->
    <!--      >-->
    <!--        {{ popularBrand.label }}-->
    <!--      </button>-->
    <!--    </div>-->
    <h4 class="filter__subtitle-two">Диапозон цен</h4>
    <div class="filter__options">
      <div class="price-filter__currency">
        <MRangeSlider />
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
        <fieldset class="filter__range-fields">
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray">min</span>
            <input
              v-model="range[`price_${currency.value}_min`]"
              type="text"
              inputmode="number"
              :placeholder="`40 000 ${currency.label}`"
              class="input-group__field"
              @input="updateSelection"
            />
          </div>
          <div class="input-group filter__range-input">
            <span class="button button--square button--gray">max</span>
            <input
              v-model="range[`price_${currency.value}_max`]"
              type="text"
              inputmode="number"
              :placeholder="`100 000 ${currency.label}`"
              class="input-group__field"
              @input="updateSelection"
            />
          </div>
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    rangeProp: {
      type: Object,
      default: () => ({}),
    },
  })

  const emit = defineEmits(['updateSelection'])

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

  const currency = ref(currencyList.value[0])

  const range = ref(props.rangeProp)

  const updateSelection = () => {
    emit('updateSelection', range.value)
  }

  const selectCurrency = (item) => {
    currency.value = item
    range.value = {}
    updateSelection()
    // [`price_${currency.value.value}_min`]: null,
    // [`price_${currency.value.value}_max`]: null,
  }
</script>
