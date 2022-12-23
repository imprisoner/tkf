<template>
  <div class="filter__main">
    <h4 class="filter__subtitle mobile-caret">Популярные</h4>
    <div class="filter__popular-list">
      <button
        v-for="popularBrand in getPopularBrands"
        :key="popularBrand"
        :class="[
          'filter__popular-item',
          'button',
          'button--text-sm',
          'button--gray',
        ]"
        type="button"
      >
        {{ popularBrand.label }}
      </button>
    </div>
    <h4 class="filter__subtitle-two">Все диаметры</h4>
    <div class="filter__options">
      <div class="filter__search search">
        <div class="search input-group">
          <input
            id="navbar_search"
            v-model="searchString"
            class="input-group__field"
            type="text"
            placeholder="Найти лучшие в мире часы"
          />
          <button class="button button--square button--black" type="button">
            <BaseIcon name="search" />
          </button>
        </div>
      </div>
      <SGoodSectionCheckboxGroup
        :list="getFilteredList"
        :selected-prop="getSelected"
        @update-selection="updateSelection"
      />
    </div>
  </div>
</template>

<script setup>
  const getPopularBrands = ref([
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
    { value: 'da', label: 'Casio' },
  ])

  const props = defineProps({
    list: {
      type: Array,
      default: () => [],
    },
    selectedProp: {
      type: Array,
      default: () => [],
    },
  })

  const emit = defineEmits(['updateSelection'])

  const searchString = ref('')

  const selected = ref([...props.selectedProp])

  const getFilteredList = computed(() =>
    props.list.filter((i) =>
      i.label.toLowerCase().includes(searchString.value.toLowerCase())
    )
  )

  const updateSelection = (val) => {
    selected.value = val
    emit('updateSelection', selected.value)
  }

  const getSelected = computed(() =>
    selected.value.filter(
      (i) => !!getFilteredList.value.findIndex((fi) => fi.value === i)
    )
  )

  watch(props.selectedProp, () => (selected.value = [...props.selectedProp]))
</script>
