<template>
  <div class="filters">
    <div class="filters__triggers">
      <div class="filters__tabs">
        <button
          v-for="item in filteredFilterTabs.slice(0, 5)"
          :key="item.value"
          type="button"
          :class="[
            'button',
            'button--caret',
            'filters__tab',
            {
              active: item.value === activeFiltersTab?.value,
            },
          ]"
          @click="toggleFilterTab(item)"
        >
          {{ item.label }}
        </button>
      </div>
      <div
        class="button button--square stroked-icon filters__button"
        @click="toggleFilterTab(null)"
      >
        <BaseIcon name="filters" />
      </div>
    </div>

    <ExpandTransition>
    <div v-show="activeFiltersTab" class="filters__window">
      <aside class="filters__sidebar">
        <div class="filters__mobile">
          <h6 class="filters__mobile-subtitle">Фильтры</h6>
          <span class="text-16 lots-found">{{ getCounterString }}</span>

        </div>
        <ul class="filters__list">
          <li
            v-for="item in filteredFilterTabs"
            :key="item.value"
            :class="[
              'filters__list-item',
              { active: item === activeFiltersTab },
            ]"
            @click="toggleFilterTab(item,true)"
          >
            <div class="filters__list-btn button button--text-sm">
              <BaseIcon :name="item.icon" />
              <span>{{ item.label }}</span>
              <BaseIcon
                name="arrow-right"
                class="filters__mobile-button--icon"
              />
            </div>
            <div class="filters__mobile-active-filters">
              <span
                v-for="mobItem in 10"
                :key="mobItem"
                class="filters__mobile-active-item"
                >Casio,&nbsp;</span
              >
            </div>
          </li>
        </ul>
        <!--        <button class="filters__save link-button" type="button">-->
        <!--          <BaseIcon name="bookmark" />-->
        <!--          <span>Сохранить запрос</span>-->
        <!--        </button>-->
      </aside>

      <main
        v-for="content in filteredFilterTabs"
        :key="content.value"
        class="filters__main filter"
        :class="{ show: content.value === activeFiltersTab?.value }"
      >
        <div class="filter__top">
          <h3 v-if="content.fullLabel" class="filter__title">
            {{ content.fullLabel }}
          </h3>
          <h3 v-else class="filter__title">{{ content.label }}</h3>
          <span class="text-16 lots-found">{{ getCounterString }}</span>
        </div>

        <div class="filter__backdrop button mobile-caret">
          <span>Назад</span>
        </div>

        <s-good-section-filters-brands
          v-if="content.value === 'brand'"
          v-model="selectedBrands"
          :list="getBrandsList"
          :popular-brands="getPopularBrandsList"
        />
        <s-good-section-filters-price
          v-if="content.value === 'price'"
          v-model="selectedPrice"
          :aggregations="priceFiltersAggregation.value"
        />
        <s-good-section-filters-diametr
          v-if="content.value === 'diametr' && goodType === 'watches'"
          v-model="selectedDiameter"
          :aggregations="diameterFiltersAggregation.value"
        />
        <s-good-section-filters-place
          v-if="content.value === 'place'"
          v-model="selectedPlaces"
          :list="getPlacesList"
        />
        <s-good-section-filters-stones
          v-if="content.value === 'stones' && goodType === 'jewelry'"
          v-model="selectedStones"
         :list="getStonesList"
        />
        <s-good-section-filters-category
          v-if="content.value === 'category' && goodType === 'jewelry'"
          v-model="selectedCategories"
          :list="getCategoryList"
        />
        <s-good-section-filters-gender
          v-if="content.value === 'gender'"
          :list="getGenderList"
          :selected="selectedGender"
          @update-selection="updateGenderSelection"
        />
        <s-good-section-filters-condition
          v-if="content.value === 'condition'"
          :list="getConditionList"
          :selected="selectedCondition"
          @update-selection="updateConditionSelection"
        />
      </main>

      <footer class="filters__footer">
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
          <span>Сохранить</span>
        </button>
      </footer>
    </div>
    </ExpandTransition>
  </div>
</template>

<script setup>
  import {getDiameterFilterAggregation, getPriceFilterAggregation, getFilterObject } from "../../api/getFilterObject";
  import ExpandTransition from "../ui/transitions/ExpandTransition";
  import {getBrands} from "../../api/getBrands";
  import SGoodSectionFiltersStones from "./s-good-section-filters-tabs/s-good-section-filters-stones";
  import SGoodSectionFiltersCategory from "./s-good-section-filters-tabs/s-good-section-filters-category";
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

  // data fetching-----------------------------

  const popularBrandsList = await getBrands({ isShowOnMain: true, brandType: props.goodType === 'watches'? 'WATCH' : 'JEWELRY' },true)

  const { getUrlSearchParams, setUrlSearchParams } = useQueryString()

  const { data: filterObjects } = await getFilterObject(props.goodType)

  const getBrandsList = computed(() =>
    filterObjects.value?.brands.map((i) => ({ value: i.id, label: i.name }))
  )

  const getPopularBrandsList = computed(() =>
    popularBrandsList.map((i) => ({ value: i.id, label: i.name }))
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

  const toggleFilterTab = (item,isAsideMenu=false) => {
    if (item === null && activeFiltersTab.value === null) {
      activeFiltersTab.value = filteredFilterTabs.value[0]
    } else {
      activeFiltersTab.value = activeFiltersTab.value === item && !isAsideMenu ? null : item
    }
  }
  // !-------------------------------------!


  const filteredFilterTabs = computed(()=>{
    return props.goodType === 'watches' ?
      filterTabs.value.filter(tab=> {
        return tab.value !== 'category' && tab.value !== 'stones'
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

  // !-------------------------------------!

  // !Place filter ----------------------!
  const selectedPlaces = ref([])
  if (typeof getUrlSearchParams.value.city_location === 'string') {
    selectedPlaces.value = [+getUrlSearchParams.value.city_location]
  }
  if (typeof getUrlSearchParams.value.city_location === 'object') {
    selectedPlaces.value = [...getUrlSearchParams.value.city_location].map((i) => +i)
  }

  // !-------------------------------------!
  // !Categories filter ----------------------!
  const selectedCategories = ref([])
  if (typeof getUrlSearchParams.value.category === 'string') {
    selectedCategories.value = [+getUrlSearchParams.value.category]
  }
  if (typeof getUrlSearchParams.value.category === 'object') {
    selectedCategories.value = [...getUrlSearchParams.value.category].map((i) => +i)
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
    toggleFilterTab(null)
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
