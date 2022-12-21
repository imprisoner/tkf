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
          <span class="text-16 lots-found">Найдено 185 товаров</span>
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
              <BaseIcon :name="item.realIcon" />
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
          <BaseIcon name="star" />
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
          <h3 class="filter__title">{{ content.label }}</h3>
          <span class="text-16 lots-found">Найдено 185 товаров</span>
          <div class="filters__mobile-close">
            <BaseIcon name="star" />
          </div>
        </div>
        <div class="filter__backdrop button mobile-caret">
          <span>Назад</span>
        </div>
        <div class="filter__popular">
          <h4 class="filter__subtitle mobile-caret show-menu">
            Популярные {{ content.label }}
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
          <h4 class="filter__subtitle mobile-caret">Все {{ content.label }}</h4>
          <div class="filter__options">
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
            <ul class="filter__options-list">
              <li class="filter__option">
                <CheckboxComponent
                  label="Выбрать все"
                  value="all"
                  :checked="selected.length === brandsList.length"
                  @change="selectAllBrands"
                />
              </li>
              <li
                v-for="item in brandsList"
                :key="item.value"
                class="filter__option"
              >
                <CheckboxComponent
                  :label="item.label"
                  :value="item.value"
                  :checked="selected.indexOf(item.value) >= 0"
                  @change="
                    (checked) => handleBrandSelection(item.value, checked)
                  "
                />
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer class="filters__footer">
        <button
          class="button button--black"
          type="button"
          @click="resetSelectedBrands"
        >
          <BaseIcon name="star" />
          <!--          <BaseIcon name="filters/rotate-ccw" />-->
          <span>Сбросить</span>
        </button>
        <button class="button button--gray stroked-icon" type="button">
          <BaseIcon name="star" />
          <!--          <BaseIcon name="filters/check" />-->
          <span>Сохранить</span>
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
  import CheckboxComponent from '~/components/ui/CheckboxComponent.vue'

  const brandsList = ref([
    {
      label: 'A. Lange & Söhne',
      value: 0,
      isPopular: true,
    },
    {
      label: 'A. Lange & Söhne',
      value: 1,
      isPopular: true,
    },
    {
      label: 'A. Lange & Söhne',
      value: 2,
      isPopular: true,
    },
    {
      label: 'A. Lange & Söhne',
      value: 3,
      isPopular: true,
    },
    {
      label: 'A. Lange & Söhne',
      value: 4,
      isPopular: false,
    },
    {
      label: 'A. Lange & Söhne',
      value: 5,
      isPopular: false,
    },
    {
      label: 'A. Lange & Söhne',
      value: 6,
      isPopular: false,
    },
    {
      label: 'A. Lange & Söhne',
      value: 7,
      isPopular: false,
    },
    {
      label: 'A. Lange & Söhne',
      value: 8,
      isPopular: true,
    },
    {
      label: 'A. Lange & Söhne',
      value: 9,
      isPopular: true,
    },
  ])

  const getPopularBrands = computed(() => {
    return brandsList.value.filter((brand) => brand.isPopular)
  })

  const selected = ref([])

  const selectAllBrands = () => {
    selected.value.length === brandsList.value.length
      ? (selected.value = [])
      : (selected.value = [...brandsList.value.map((i) => i.value)])
  }

  const handleBrandSelection = (item, checked) => {
    checked
      ? selected.value.push(item)
      : selected.value.splice(selected.value.indexOf(item), 1)
  }

  const resetSelectedBrands = () => {
    selected.value = []
  }

  const filterTabs = ref([
    {
      label: 'Бренд',
      value: 'brand',
      icon: 'star',
      realIcon: 'tag',
    },
    {
      label: 'Модель',
      value: 'model',
      icon: 'star',
      realIcon: 'box',
    },
    {
      label: 'Цена',
      value: 'price',
      icon: 'star',
      realIcon: 'dollar-sign',
    },
    {
      label: 'Диаметр',
      value: 'diametr',
      icon: 'star',
      realIcon: 'target',
    },
    {
      label: 'Местоположение',
      value: 'place',
      icon: 'star',
      realIcon: 'compass',
    },
    {
      label: 'Пол',
      value: 'sex',
      icon: 'star',
      realIcon: 'ph_gender-intersex-bold',
    },
    {
      label: 'Состояние',
      value: 'condition',
      icon: 'star',
      realIcon: 'thumbs-up',
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
