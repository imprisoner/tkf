<template>
  <component :is="icon"> </component>
</template>
<script setup>
  const props = defineProps({
    name: {
      type: String,
      default: () => 'x',
    },
  })
  const icon = computed(() =>
    defineAsyncComponent(() => import(`~/assets/svg/icons/${props.name}.svg`))
  )
</script>
