<template>
  <transition name="slide" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </transition>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translate(-10%, 0);
  opacity: 0;
}
</style>
