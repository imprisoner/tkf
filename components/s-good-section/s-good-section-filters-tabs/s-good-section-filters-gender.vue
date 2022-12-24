<template>
  <div class="filter__main">
    <h4 class="filter__subtitle mobile-caret">Выберите пол</h4>
    <div class="filter__popular-list">
      <button
        v-for="item in list"
        :key="item.value"
        :class="[
          'filter__popular-item',
          'button',
          'button--text-sm',
          { 'button--gray': selected === item.value },
        ]"
        type="button"
        @click="updateSelection(item.value)"
      >
        {{ item.label }}
      </button>
    </div>
  </div>
</template>

<script setup>
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

  const updateSelection = (val) => {
    emit('updateSelection', val)
  }
</script>
