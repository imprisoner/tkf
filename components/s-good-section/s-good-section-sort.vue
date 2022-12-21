<template>
  <form :class="['dropdown', { expanded: isExpanded }]">
    <div class="dropdown__trigger input-group">
      <input
        class="button button--neutral"
        type="text"
        readonly
        :value="ordering.label"
      />
      <button
        class="button button--square button--gray icon-stroked"
        type="button"
        @click.stop="toggleDropdown"
      >
        <BaseIcon name="chevron-down" />
      </button>
    </div>
    <ul v-show="isExpanded" class="dropdown__list">
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

  defineProps({
    sortTypes: {
      type: Array,
      default: () => [],
    },
    ordering: {
      type: Object,
      default: () => ({}),
    },
  })

  const isExpanded = ref(false)

  const toggleDropdown = () => {
    isExpanded.value = !isExpanded.value

    if (isExpanded.value) {
      window.addEventListener('click', () => (isExpanded.value = false), {
        once: true,
      })
    }
  }

  const handleSelection = (type) => {
    emit('sort', type)
  }
</script>
