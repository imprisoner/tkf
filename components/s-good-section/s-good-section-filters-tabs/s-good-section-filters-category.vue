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
    <h4 v-if="isDesktop" class="filter__subtitle-two">Выберите тип</h4>
    <div class="filter__options">
      <SGoodSectionCheckboxGroup
        :list="getFilteredList"
        v-model="selected"
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
  modelValue: {
    type: Array,
    default: () => [],
  }
})

const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit("update:modelValue", newValue);
  }
});
const searchString = ref('')

  const getFilteredList = computed(() =>
    props.list.filter((i) =>
      i.label.toLowerCase().includes(searchString.value.toLowerCase())
    )
  )
</script>
