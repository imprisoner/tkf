<template>
  <component :is='icon'></component>
</template>
<script setup>
const props = defineProps({
  name: String,
})
const icon = computed(() =>
  defineAsyncComponent(() => import(`~/assets/svg/icons/${props.name}.svg`))
)
</script>