<template>
  <div class="filters">
    <div class="filters__triggers">
      <div class="filters__tabs">
        <button
          v-for="item in filterTabs.slice(0, 5)"
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
          @click="toggleFilterItem(item)"
        >
          {{ item.label }}
        </button>
      </div>
      <div
        class="button button--square button--gray stroked-icon filters__button"
        @click="toggleFilterItem(null)"
      >
        <BaseIcon name="filters" />
      </div>
    </div>
    <div v-show="activeFiltersTab" class="filters__window">
      <aside class="filters__sidebar">
        <div class="filters__mobile">
          <h6 class="filters__mobile-subtitle">Фильтры</h6>
          <span class="text-16 lots-found">{{ getCounterString }}</span>
          <div class="filters__mobile-close">
            <BaseIcon name="x" />
          </div>
        </div>
        <ul class="filters__list">
          <li
            v-for="item in filterTabs"
            :key="item.value"
            :class="[
              'filters__list-item',
              { active: item === activeFiltersTab },
            ]"
            @click="toggleFilterItem(item)"
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
        <button class="filters__save link-button" type="button">
          <BaseIcon name="bookmark" />
          <span>Сохранить запрос</span>
        </button>
      </aside>

      <main
        v-for="content in filterTabs"
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
          <div class="filters__mobile-close">
            <BaseIcon name="star" />
          </div>
        </div>
        <div class="filter__backdrop button mobile-caret">
          <span>Назад</span>
        </div>
        <div class="filter__popular">
          <h4 class="filter__subtitle mobile-caret show-menu">
            {{ content.titleOne }}
          </h4>
          <div class="filter__popular-list">
            <button
              v-for="popularBrand in getPopularBrands"
              :key="popularBrand"
              :class="[
                'filter__popular-item',
                'button',
                'button--text-sm',
                'button--gray',
                { active: selected.indexOf(popularBrand.value) >= 0 },
              ]"
              type="button"
              @click="
                handleBrandSelection(
                  popularBrand.value,
                  selected.indexOf(popularBrand.value) === -1
                )
              "
            >
              {{ popularBrand.label }}
            </button>
          </div>
        </div>
        <div class="filter__main">
          <h4 class="filter__subtitle mobile-caret">
            {{ content.titleTwo }}
          </h4>
          <SGoodSectionSortPrice v-if="content.value == 'price'" />
          <div
            v-if="
              (content.value !== 'price') &
              (content.value !== 'sex') &
              (content.value !== 'condition')
            "
            class="filter__options"
          >
            <div class="filter__search search">
              <div class="search input-group">
                <input
                  id="navbar_search"
                  class="input-group__field"
                  type="text"
                  placeholder="Найти лучшие в мире часы"
                />
                <button
                  class="button button--square button--black"
                  type="button"
                >
                  <BaseIcon name="search" />
                </button>
              </div>
            </div>
            <SGoodSectionCheckboxGroup :list="getBrandsList" />
          </div>
        </div>
      </main>

      <footer class="filters__footer">
        <button class="button button--black" type="button">
          <BaseIcon name="rotate-ccw" />
          <span>Сбросить</span>
        </button>
        <button class="button button--gray stroked-icon" type="button">
          <BaseIcon name="check" />
          <span>Сохранить</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
  import SGoodSectionSortPrice from './s-good-section-price/s-good-section-price.vue'
  import { getFilterObject } from '~/api/getFilterObject'
  import { getBrands } from '~/api/getBrands'
  import declOfNum from '~/composables/declOfNum'

  const props = defineProps({
    commonLotsCount: {
      type: Number,
      default: 0,
    },
  })

  const getCounterString = computed(() =>
    declOfNum(props.count, [
      `Найден ${props.commonLotsCount} товар`,
      `Найдено ${props.commonLotsCount} товара`,
      `Найдено ${props.commonLotsCount} товаров`,
    ])
  )

  const { data: filterObjects } = await getFilterObject('watches')
  const popularBrands = await getBrands({ isShowOnMain: true })

  const getBrandsList = computed(() =>
    filterObjects.value.brands.map((i) => ({ value: i.id, label: i.name }))
  )

  const getPopularBrands = computed(() => {
    return getBrandsList.value.filter((brand) => brand.isPopular)
  })

  const filterTabs = ref([
    {
      label: 'Бренд',
      titleOne: 'Популярные бренды',
      titleTwo: 'Все бренды',
      value: 'brand',
      icon: 'tag',
    },
    {
      label: 'Модель',
      titleOne: 'Популярные модели',
      titleTwo: 'Все модели',
      value: 'model',
      icon: 'box',
    },
    {
      label: 'Цена',
      titleOne: 'Популярные бренды',
      titleTwo: 'Диапазон цен',
      value: 'price',
      icon: 'dollar-sign',
    },
    {
      label: 'Диаметр',
      fullLabel: 'Диаметр и габариты',
      titleOne: 'Популярные',
      titleTwo: 'Все диаметры',
      value: 'diametr',
      icon: 'target',
    },
    {
      label: 'Местоположение',
      titleOne: 'Популярное местоположение',
      titleTwo: 'Поиск местоположения',
      value: 'place',
      icon: 'compass',
    },
    {
      label: 'Пол',
      titleOne: 'Выберите пол',
      titleTwo: null,
      value: 'sex',
      icon: 'ph_gender-intersex-bold',
    },
    {
      label: 'Состояние',
      titleOne: 'Популярные категории',
      titleTwo: 'Состояние',
      value: 'condition',
      icon: 'thumbs-up',
    },
  ])

  const activeFiltersTab = ref(null)

  const toggleFilterItem = (item) => {
    if (item === null && activeFiltersTab.value === null) {
      activeFiltersTab.value = filterTabs.value[0]
    } else {
      activeFiltersTab.value = activeFiltersTab.value === item ? null : item
    }
  }
</script>
