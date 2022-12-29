<template>
  <div class="filter__main">
    <slot name="backButtons" :active-tabs="activeTabs" :back-to-filter-enter="backToFilterEnter"></slot>
    <h4 v-show="isDesktop || !activeTabs.popular && !activeTabs.all" class="filter__subtitle mobile-caret" @click="!isDesktop && (activeTabs.popular = true)">Популярное местоположение</h4>
    <div v-show="isDesktop || activeTabs.popular" class="filter__popular-list">
      <button
        v-for="popularPlace in list.slice(0,3)"
        :key="popularPlace"
        :class="[
              'filter__popular-item',
              'button',
              'button--text-sm',
              { 'button--gray': isDesktop && selected === popularPlace.value },
              { active: selected.indexOf(popularPlace.value) >= 0 },
            ]"
        type="button"
        @click="handleSelection(popularPlace.value,selected.indexOf(popularPlace.value) >= 0)"
      >
        <BaseIcon
          v-if="!isDesktop"
          class="filter__mobile-item-check"
          :class="{'filter__mobile-item-check--not-active': selected.indexOf(popularPlace.value) < 0}"
          name="check"/>
        {{ popularPlace.label }}
      </button>
    </div>
    <h4 v-show="isDesktop || !activeTabs.popular && !activeTabs.all" class="filter__subtitle mobile-caret" :class="{'filter__subtitle-two':isDesktop}" @click="!isDesktop && (activeTabs.all = true)">Поиск местоположения</h4>
    <div v-show="isDesktop || activeTabs.all"  class="filter__options">
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
