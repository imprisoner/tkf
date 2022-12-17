<template>
  <form class="dropdown">
    <div class="dropdown__trigger input-group">
      <input
        class="button button--neutral"
        type="text"
        readonly
        :value="selectedType.label"
      />
      <button
        class="button button--square button--gray icon-stroked"
        type="button"
        @click="toggleDropdown"
      >
        <BaseIcon name="chevron-down" />
      </button>
    </div>
    <ul class="dropdown__list" v-show="isExpanded">
      <li v-for="item in sortTypes" :key="item.value">
        <button
          class="button button--block"
          type="button"
          @click="handleSelection(item)"
        >
          {{ item.label }}
        </button>
      </li>
    </ul>
  </form>
</template>

<script setup>
  const emit = defineEmits(['sort'])

  const sortTypes = ref([
    {
      label: 'Сначала новые',
      value: 'new',
    },
    {
      label: 'По возрастанию цены',
      value: 'max_price',
    },
    {
      label: 'По убыванию цены',
      value: 'min_price',
    },
  ])

  const selectedType = ref(sortTypes.value[0])

  const isExpanded = ref(false)

  const toggleDropdown = () => {
    isExpanded.value = !isExpanded.value
  }

  const handleSelection = (type) => {
    selectedType.value = type
    toggleDropdown()
    emit('sort', type.value)
  }
</script>
