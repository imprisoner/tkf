<template>
  <ul class="filter__options-list">
    <li class="filter__option">
      <CheckboxComponent
        label="Выбрать все"
        value="all"
        :checked="selected.length === list.length"
        @change="selectAllBrands"
      />
    </li>
    <li v-for="item in list" :key="item.value" class="filter__option">
      <CheckboxComponent
        :label="item.label"
        :value="item.value"
        :checked="selected.indexOf(item.value) >= 0"
        @change="(checked) => handleBrandSelection(item.value, checked)"
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
  })

  const selected = ref([])

  const selectAllBrands = () => {
    selected.value.length === props.list.length
      ? (selected.value = [])
      : (selected.value = [...props.list.map((i) => i.value)])
  }

  const handleBrandSelection = (item, checked) => {
    checked
      ? selected.value.push(item)
      : selected.value.splice(selected.value.indexOf(item), 1)
  }

  // const resetSelectedBrands = () => {
  //   selected.value = []
  // }
</script>
