<template>
  <label class="checkbox">
    <input
      type="checkbox"
      :value="value"
      :checked="checked"
      @change.stop="emit('change', !checked)"
    />
    <div class="checkbox__wrap">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
          fill="currentColor"
        ></path>
      </svg>
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
