<template>
  <div class="filters-mobile">
    <div class="filters-mobile__close" @click="emit('close')">
      <BaseIcon name="x" />
    </div>
    <header class="filters-mobile__header">
      <span class="filters-mobile__current-page">{{activeFiltersTab?.fullLabel || activeFiltersTab?.label || 'Фильтры'}}</span>
      <span class="filters-mobile__found-count">{{getCounterString}}</span>
    </header>

    <main v-if="!activeFiltersTab">
      <ul class="filters-mobile__list">
        <li
          v-for="item in filteredFilterTabs"
          :key="item.value"
          class="filters-mobile__list-item"
          @click="toggleFilterTab(item)"
        >
          <div class="filters-mobile__list-button button button--text-sm">
            <BaseIcon :name="item.icon" />
            <span>{{ item.label }}</span>
            <BaseIcon
              name="arrow-right"
              class="filters-mobile__list-button-icon"
            />
          </div>
          <span class="filters-mobile__active-filters">
            {{getMobileFilterItemValues(item.value)}}
          </span>
        </li>
      </ul>
    </main>
    <main
      v-else
      class="filters-mobile__category-page"
    >
      <div v-if="false" class="filters-mobile__backdrop-home button button--text-sm filters-mobile__list-item" @click="toggleFilterTab(null)">
        <BaseIcon name="home" />
        <span>К фильтрам</span>
      </div>
        <div class="filters-mobile__backdrop button button--text-sm filters-mobile__list-item" @click="toggleFilterTab(null)">
          <BaseIcon name="chevron-left" />
          <span>Назад</span>
        </div>

      <s-good-section-filters-brands
        v-if="activeFiltersTab.value === 'brand'"
        class="filters-mobile__brand-filter"
        :list="getBrandsList"
        :selected-prop="selectedBrands"
        @update-selection="updateBrandsSelection"
      />
      <s-good-section-filters-price
        v-if="activeFiltersTab.value === 'price'"
        v-model="selectedPrice"
        class="filters-mobile__price-filter"
        :aggregations="priceFiltersAggregation.value"
      />
      <s-good-section-filters-diametr
        v-if="activeFiltersTab.value === 'diametr' && goodType === 'watches'"
        v-model="selectedDiameter"
        class="filters-mobile__diameter-filter"
        :aggregations="diameterFiltersAggregation.value"
      />
      <s-good-section-filters-place
        v-if="activeFiltersTab.value === 'place'"
        class="filters-mobile__place-filter"
        :list="getPlacesList"
        :selected-prop="selectedPlaces"
        @update-selection="updatePlaceSelection"
      />
      <s-good-section-filters-stones
        v-if="activeFiltersTab.value === 'stones' && goodType === 'jewelry'"
        :list="getStonesList"
        :selected-prop="selectedStones"
        @update-selection="updateStonesSelection"
      />
      <s-good-section-filters-category
        v-if="activeFiltersTab.value === 'category' && goodType === 'jewelry'"
        :list="getCategoryList"
        :selected-prop="selectedCategories"
        @update-selection="updateCategorySelection"
      />
      <s-good-section-filters-gender
        v-if="activeFiltersTab.value === 'gender'"
        :list="getGenderList"
        :selected="selectedGender"
        @update-selection="updateGenderSelection"
      />
      <s-good-section-filters-condition
        v-if="activeFiltersTab.value === 'condition'"
        :list="getConditionList"
        :selected="selectedCondition"
        @update-selection="updateConditionSelection"
      />
    </main>

    <footer class="filters-mobile__footer">
      <button
        class="button button--black"
        type="button"
        @click="resetFilters"
      >
        <BaseIcon name="rotate-ccw" />
        <span>Сбросить</span>
      </button>
      <button
        class="button button--gray stroked-icon"
        type="button"
        @click="applyFilters"
      >
        <BaseIcon name="check" />
        <span>Применить</span>
      </button>
    </footer>
  </div>
</template>

<script setup>
import {
  getDiameterFilterAggregation,
  getPriceFilterAggregation
, getFilterObject } from "../../api/getFilterObject";
import declOfNum from '~/composables/declOfNum'
import useQueryString from '~/composables/useQueryString'

const props = defineProps({
  commonLotsCount: {
    type: Number,
    default: 0,
  },
  goodType: {
    type: String,
    default: 'watches',
  },
})
const emit = defineEmits(['close'])
// data fetching-----------------------------
const { getUrlSearchParams, setUrlSearchParams } = useQueryString()

const { data: filterObjects } = await getFilterObject(props.goodType)

const getBrandsList = computed(() =>
  filterObjects.value?.brands.map((i) => ({ value: i.id, label: i.name }))
)
const getPlacesList = computed(() => {
    const cities = []
    filterObjects.value?.countries.forEach((country) => {
      country.cities.forEach((city) => {
        cities.push({ value: city.id, label:city.name})
      })
    })
    return cities
  }
)
const getStonesList = computed(() =>
  filterObjects.value?.stones.map((i) => ({ value: i.id, label: i.name }))
)
const getCategoryList = computed(() =>
  filterObjects.value?.categories.map((i) => ({ value: i.id, label: i.name }))
)
// !-------------------------------------!
function getMobileFilterItemValues(item){
  if (item === 'brand'){return getBrandsList.value.filter(brand => selectedBrands.value.includes(brand.value))?.map((brand)=>brand.label).join(', ') || 'Все'}
  if (item === 'category'){return getCategoryList.value.filter(category => selectedCategories.value.includes(category.value))?.map((category)=>category.label).join(', ') || 'Все'}
  if (item === 'stones'){return getStonesList.value.filter(stone => selectedStones.value.includes(stone.value))?.map((stone)=>stone.label).join(', ') || 'Все'}
  if (item === 'price'){
    const currencyName = selectedPrice.value.price_rub_min || selectedPrice.value.price_rub_max ? 'Руб' : 'Usd'
    const minVal = selectedPrice.value.price_usd_min || selectedPrice.value.price_rub_min
    const maxVal = selectedPrice.value.price_usd_max || selectedPrice.value.price_rub_max
    return minVal||maxVal ? `${minVal ? `от ${minVal} ${currencyName}`:''}
              ${minVal&&maxVal?' - ':''}
              ${maxVal ? `до ${maxVal} ${currencyName}`:''}`: 'Все'}
  if (item === 'diametr'){
    return selectedDiameter.value.diameter_min || selectedDiameter.value.diameter_max?`${selectedDiameter.value.diameter_min ? `от ${selectedDiameter.value.diameter_min}mm`:''}
              ${selectedDiameter.value.diameter_min&&selectedDiameter.value.diameter_max?' - ':''}
              ${selectedDiameter.value.diameter_max ? `до ${selectedDiameter.value.diameter_max}mm`:''}`: 'Все'}
  if (item === 'place'){return getPlacesList.value.filter(place => selectedPlaces.value.includes(place.value))?.map((place)=>place.label).join(', ') || 'Все'}
  if (item === 'gender'){return getGenderList.value.find(item=>item.value===selectedGender.value)?.label || 'Все'}
  if (item === 'condition'){return getConditionList.value.find(item=>item.value===selectedCondition.value)?.label || 'Все'}
  return ''
}
// tabs-------------------------------------

const filterTabs = ref([
  {
    label: 'Бренд',
    fullLabel: 'Бренды',
    value: 'brand',
    icon: 'tag',
  },
  {
    label: 'Тип',
    fullLabel: 'Тип украшения',
    value: 'category',
    icon: 'command',
  },
  {
    label: 'Вставка',
    fullLabel: 'Вставка',
    value: 'stones',
    icon: 'triangle',
  },
  {
    label: 'Цена',
    fullLabel: 'Цена',
    value: 'price',
    icon: 'dollar-sign',
  },
  {
    label: 'Диаметр',
    fullLabel: 'Диаметр и габариты',
    value: 'diametr',
    icon: 'target',
  },
  {
    label: 'Место',
    fullLabel: 'Местоположение',
    value: 'place',
    icon: 'compass',
  },
  {
    label: 'Пол',
    fullLabel: '',
    value: 'gender',
    icon: 'ph_gender-intersex-bold',
  },
  {
    label: 'Состояние',
    fullLabel: '',
    value: 'condition',
    icon: 'thumbs-up',
  },
])

const activeFiltersTab = ref(null)

const toggleFilterTab = (item) => {
  if (item === null && activeFiltersTab.value === null) {
    activeFiltersTab.value = filteredFilterTabs.value[0]
  } else {
    activeFiltersTab.value = activeFiltersTab.value === item ? null : item
  }
}
// !-------------------------------------!


const filteredFilterTabs = computed(()=>{
  return props.goodType === 'watches' ?
    filterTabs.value.filter(tab=> {
      return tab.value !== 'categories' || tab.value !== 'stones'
    }) :
    filterTabs.value.filter(tab=>tab.value!=='diametr')
})
// !brands filter ----------------------!
const selectedBrands = ref([])
if (typeof getUrlSearchParams.value.brand === 'string') {
  selectedBrands.value = [+getUrlSearchParams.value.brand]
}
if (typeof getUrlSearchParams.value.brand === 'object') {
  selectedBrands.value = [...getUrlSearchParams.value.brand].map((i) => +i)
}

const updateBrandsSelection = (val) => {
  selectedBrands.value = val
}

// !-------------------------------------!
// !Place filter ----------------------!
const selectedPlaces = ref([])
if (typeof getUrlSearchParams.value.city_location === 'string') {
  selectedPlaces.value = [+getUrlSearchParams.value.city_location]
}
if (typeof getUrlSearchParams.value.city_location === 'object') {
  selectedPlaces.value = [...getUrlSearchParams.value.city_location].map((i) => +i)
}
const updatePlaceSelection = (val) => {
  selectedPlaces.value = val
}
// !Categories filter ----------------------!
const selectedCategories = ref([])
if (typeof getUrlSearchParams.value.category === 'string') {
  selectedCategories.value = [+getUrlSearchParams.value.category]
}
if (typeof getUrlSearchParams.value.category === 'object') {
  selectedCategories.value = [...getUrlSearchParams.value.category].map((i) => +i)
}
const updateCategorySelection = (val) => {
  selectedCategories.value = val
}

// !-------------------------------------!
// !Stones filter ----------------------!
const selectedStones = ref([])
if (typeof getUrlSearchParams.value.stone === 'string') {
  selectedStones.value = [+getUrlSearchParams.value.stone]
}
if (typeof getUrlSearchParams.value.stone === 'object') {
  selectedStones.value = [...getUrlSearchParams.value.stone].map((i) => +i)
}
const updateStonesSelection = (val) => {
  selectedStones.value = val
}

// !-------------------------------------!
// !-------------------------------------!
// !gender filter ----------------------!

const getGenderList = computed(() => [
  {
    label: 'Мужское',
    value: 'MALE',
  },
  {
    label: 'Женское',
    value: 'FEMALE',
  },
  {
    label: 'Унисекс',
    value: 'UNISEX',
  },
])
const selectedGender = ref(getUrlSearchParams.value.gender ?? null)

const updateGenderSelection = (val) => {
  selectedGender.value = selectedGender.value === val ? null : val
}

// !-------------------------------------!

// !condition filter ----------------------!

const getConditionList = computed(() => [
  {
    label: 'Новые',
    value: 'NEW',
  },
  {
    label: 'Подержанные',
    value: 'USED',
  },
])

const selectedCondition = ref(getUrlSearchParams.value.condition ?? null)

const updateConditionSelection = (val) => {
  selectedCondition.value = selectedCondition.value === val ? null : val
}
// !-------------------------------------!

// !price filter ----------------------!

const selectedPrice = ref({
  price_usd_min: getUrlSearchParams.value.price_usd_min || undefined,
  price_usd_max: getUrlSearchParams.value.price_usd_max || undefined,
  price_rub_min: getUrlSearchParams.value.price_rub_min || undefined,
  price_rub_max: getUrlSearchParams.value.price_rub_max || undefined
})
// !-------------------------------------!

const selectedDiameter = ref({
  diameter_min: getUrlSearchParams.value.diameter_min || undefined,
  diameter_max: getUrlSearchParams.value.diameter_max || undefined
})

const filterParams=computed(()=> ({
    brand: [...selectedBrands.value].length ? [...selectedBrands.value] : undefined,
    city_location: [...selectedPlaces.value].length ? [...selectedPlaces.value] : undefined,
    stone: [...selectedStones.value].length ? [...selectedStones.value] : undefined,
    category: [...selectedCategories.value].length ? [...selectedCategories.value] : undefined,
    gender: selectedGender.value || undefined,
    condition: selectedCondition.value || undefined,
    price_usd_min: selectedPrice.value.price_usd_min || undefined,
    price_usd_max: selectedPrice.value.price_usd_max || undefined,
    price_rub_min: selectedPrice.value.price_rub_min || undefined,
    price_rub_max: selectedPrice.value.price_rub_max || undefined,
    diameter_range_min: selectedDiameter.value.diameter_min || undefined,
    diameter_range_max: selectedDiameter.value.diameter_max || undefined,
  })
)

const priceFiltersAggregation = ref({})
const diameterFiltersAggregation = ref({})

watch(() => [selectedGender.value, selectedCondition.value, selectedDiameter.value, ...selectedBrands.value, ...selectedPlaces.value, ...selectedStones.value, ...selectedCategories.value], async () => {
  priceFiltersAggregation.value = await getPriceFilterAggregation(props.goodType,filterParams.value)
}, {immediate: true})

watch(() => [selectedGender.value, selectedCondition.value, selectedPrice.value, ...selectedBrands.value, ...selectedPlaces.value, ...selectedStones.value, ...selectedCategories.value], async () => {
  if (props.goodType === 'watches') {
    diameterFiltersAggregation.value = await getDiameterFilterAggregation(props.goodType, filterParams.value)
  }
}, {immediate: true})

const setFilteredUrlParams = () => {
  setUrlSearchParams(filterParams.value)
}

const applyFilters = () => {
  setFilteredUrlParams()
  emit('close')
}

const resetFilters = () => {
  selectedBrands.value = []
  selectedPlaces.value = []
  selectedCategories.value = []
  selectedStones.value = []
  selectedGender.value = null
  selectedCondition.value = null
  selectedPrice.value = {
    price_usd_min: undefined,
    price_usd_max: undefined,
    price_rub_min: undefined,
    price_rub_max: undefined,
  }
  selectedDiameter.value = {
    diameter_min: undefined,
    diameter_max: undefined
  }
  setFilteredUrlParams()
}

const getCounterString = computed(() =>
  declOfNum(props.count, [
    `Найден ${props.commonLotsCount} товар`,
    `Найдено ${props.commonLotsCount} товара`,
    `Найдено ${props.commonLotsCount} товаров`,
  ])
)
</script>
<style lang="scss" scoped>
.filters-mobile{
  position: fixed;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  background: white;
  z-index: 2;
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  &__close{
    position: absolute;
    top: 14px;
    right: 14px;
    width: 16px;
    cursor: pointer;
  }
  &__header{
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
    padding: 0 14px;
  }
  &__current-page{
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    /* identical to box height, or 133% */
    margin-bottom: 2px;

    /* Черный */

    color: #000000;
  }
  &__found-count{
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    /* identical to box height, or 145% */


    /* Наборный */

    color: #6E6B7B;
  }
  &__list {
    &-item {
      padding: 12px 14px;
      border-bottom: 1px solid #EAEAEA;
      display: flex;
      flex-direction: column;
    }
    &-button {
      padding: unset;
      justify-content: start;
      &-icon{
        width: 16px;
        height: 16px;
        margin-left: auto;
      }
    }
  }
  &__active-filters{
    overflow: hidden;
    font-size: 11px;
    line-height: 16px;
    color: #6e6b7b;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__backdrop{
    justify-content: start;
    flex-direction: row;
    &-home{
      border-bottom: unset;
      align-self: start;
      flex-direction: row;
    }
}
  &__category-page{
    display: flex;
    flex-direction: column;
    height: -webkit-fill-available;
    overflow-y: auto;
    overflow-x: hidden;
  }
  &__price-filter, &__diameter-filter{
    padding: 16px 14px;
  }
  &__brand-filter, &__place-filter{
    overflow-y: auto;
  }
&__footer{
.button {
  flex: 1;
}
margin-top: auto;
display: flex;
}
}
</style>
