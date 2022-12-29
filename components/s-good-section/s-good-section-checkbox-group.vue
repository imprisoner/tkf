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
  import {computed} from "vue";

  const props = defineProps({
    list: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: Array,
      default: () => [],
    },
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

  const selectAll = () => {
    selected.value.length === props.list.length
      ? (selected.value = [])
      : (selected.value = [...props.list.map((i) => i.value)])
  }

  const handleSelection = (item, checked) => {
    if (checked){
      selected.value = [...selected.value,item]
    }
    else {
      selected.value.splice(selected.value.indexOf(item), 1)
    }
  }
</script>
