<template>
  <div class="filter__main">
    <h4 v-if="isDesktop" class="filter__subtitle mobile-caret">Выберите состояние</h4>
    <div class="filter__popular-list">
      <button
        v-for="item in list"
        :key="item.value"
        :class="[
          'filter__popular-item',
          'button',
          'button--text-sm',
          { 'button--gray': isDesktop && selected === item.value },
        ]"
        type="button"
        @click="emit('updateSelection', item.value)"
      >
        <BaseIcon
          v-if="!isDesktop"
          class="filter__mobile-item-check"
          :class="{'filter__mobile-item-check--not-active': selected !== item.value}"
          name="check"/>
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script setup>

import { isDesktop } from '@/utils/queries'

  defineProps({
    list: {
      type: Array,
      default: () => [],
    },
    selected: {
      type: String,
      default: null,
    },
  })

  const emit = defineEmits(['updateSelection'])
</script>
