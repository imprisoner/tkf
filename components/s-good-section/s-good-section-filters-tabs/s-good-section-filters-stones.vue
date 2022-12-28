<template>
  <div class="filter__main">
<!--    <h4 class="filter__subtitle mobile-caret">Популярное местоположение</h4>-->
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
    <h4 v-if="isDesktop" class="filter__subtitle-two">Все вставки</h4>
    <div class="filter__options">
      <SGoodSectionCheckboxGroup
        :list="getFilteredList"
        :selected-prop="getSelected"
        @update-selection="updateSelection"
      />
  </div>
  </div>
</template>

<script setup>

import { isDesktop } from '@/utils/queries'

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
