<template>
  <transition name="fade" v-bind="$attrs">
    <slot></slot>
  </transition>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
