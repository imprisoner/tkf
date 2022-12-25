<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :value="value"
      :checked="checked"
      @change.stop="emit('change', !checked)"
    />
    <div class="checkbox__wrap">
      <BaseIcon name="check" width="24" height="24" />
    </div>
    <div class="checkbox__label-text text-16">{{ label }}</div>
  </label>
</template>

<script setup>
  defineProps({
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [Number, String],
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['change'])
</script>
