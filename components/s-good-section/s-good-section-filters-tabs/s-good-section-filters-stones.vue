<template>
  <div class="filter__main">
    <slot name="backButtons" :active-tabs="activeTabs" :back-to-filter-enter="backToFilterEnter"></slot>
    <h4 v-show="isDesktop || !activeTabs.popular && !activeTabs.all" class="filter__subtitle mobile-caret" @click="!isDesktop && (activeTabs.popular = true)">Популярные вставки</h4>
    <div v-show="isDesktop || activeTabs.popular" class="filter__popular-list">
      <button
        v-for="popularStone in list.slice(0,5)"
        :key="popularStone"
        :class="[
              'filter__popular-item',
              'button',
              'button--text-sm',
               { 'button--gray': isDesktop && selected === popularStone.value },
              { active: selected.indexOf(popularStone.value) >= 0 },
            ]"
        type="button"
        @click="handleSelection(popularStone.value,selected.indexOf(popularStone.value) >= 0)"
      >
        <BaseIcon
          v-if="!isDesktop"
          class="filter__mobile-item-check"
          :class="{'filter__mobile-item-check--not-active': selected.indexOf(popularStone.value) < 0}"
          name="check"/>
        {{ popularStone.label }}
      </button>
    </div>
    <h4  v-show="isDesktop || !activeTabs.popular && !activeTabs.all" class="filter__subtitle mobile-caret" :class="{'filter__subtitle-two':isDesktop}" @click="!isDesktop && (activeTabs.all = true)">Все вставки</h4>
    <div v-show="isDesktop || activeTabs.all" class="filter__options">
      <SGoodSectionCheckboxGroup
        v-model="selected"
        :list="getFilteredList"
      />
  </div>
  </div>
</template>

<script setup>

import { isDesktop } from '@/utils/queries'

const activeTabs = ref({
  popular:false,
  all: false
})
const backToFilterEnter = () => {
  activeTabs.value.popular = false
  activeTabs.value.all = false
}
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
const handleSelection = (item, checked) => {
  if (checked){
    selected.value.splice(selected.value.indexOf(item), 1)
  }
  else {
    selected.value = [...selected.value,item]
  }
}
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
