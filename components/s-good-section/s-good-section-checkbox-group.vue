<template>
  <ul class="filter__options-list">
    <li class="filter__option">
      <CheckboxComponent
        label="Выбрать все"
        value="all"
        :checked="selected.length === list.length"
        @change="selectAll"
      />
    </li>
    <li v-for="item in list" :key="item.value" class="filter__option">
      <CheckboxComponent
        :label="item.label"
        :value="item.value"
        :checked="selected.indexOf(item.value) >= 0"
        @change="(checked) => handleSelection(item.value, checked)"
      />
    </li>
  </ul>
</template>

<script setup>
  import CheckboxComponent from '~/components/ui/CheckboxComponent.vue'

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

  const selected = ref([...props.selectedProp])

  const emit = defineEmits(['updateSelection'])

  const selectAll = () => {
    selected.value.length === props.list.length
      ? (selected.value = [])
      : (selected.value = [...props.list.map((i) => i.value)])

    emit('updateSelection', selected.value)
  }

  const handleSelection = (item, checked) => {
    checked
      ? selected.value.push(item)
      : selected.value.splice(selected.value.indexOf(item), 1)
    emit('updateSelection', selected.value)
  }

  watch(props.selectedProp, () => {
    selected.value = props.selectedProp
  })
</script>
