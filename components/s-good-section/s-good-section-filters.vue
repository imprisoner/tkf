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
            <div class="filters__list-button button button--text-sm">
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
          <BaseIcon name="star" />
          <span>Сохранить запрос</span>
        </button>
      </aside>
      <main class="filters__main filter show">
        <div class="filter__top">
          <h3 class="filter__title">Бренды</h3>
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
            Популярные бренды
          </h4>
          <div class="filter__popular-list">
            <button
              v-for="popularBrand in 6"
              :key="popularBrand"
              class="filter__popular-item button button--text-sm"
              type="button"
            >
              Casio
            </button>
          </div>
        </div>
        <div class="filter__main">
          <h4 class="filter__subtitle mobile-caret">Все бренды</h4>
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
    },
    {
      label: 'A. Lange & Söhne',
      value: 1,
    },
    {
      label: 'A. Lange & Söhne',
      value: 2,
    },
  ])

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
      real_icon: 'filters/tag',
    },
    {
      label: 'Модель',
      value: 'model',
      icon: 'star',
      real_icon: 'filters/box',
    },
    {
      label: 'Цена',
      value: 'price',
      icon: 'star',
      real_icon: 'filters/dollar-sign',
    },
    {
      label: 'Диаметр',
      value: 'diametr',
      icon: 'star',
      real_icon: 'filters/target',
    },
    {
      label: 'Местоположение',
      value: 'place',
      icon: 'star',
      real_icon: 'filters/compass',
    },
    {
      label: 'Пол',
      value: 'sex',
      icon: 'star',
      real_icon: 'filters/ph_gender-intersex-bold',
    },
    {
      label: 'Состояние',
      value: 'condition',
      icon: 'star',
      real_icon: 'filters/thumbs-up',
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
