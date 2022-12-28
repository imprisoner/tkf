<template>
  <div class="socials">
    <a
      v-if="socials[0]"
      class="socials__link"
      :href="socials[0]"
      aria-label="telegram"
      rel="nofollow"
      target="_blank"
    >
      <base-icon  class="socials__icon" name="telegram"></base-icon>
    </a>
    <a
      v-if="socials[1]"
      class="socials__link"
      :href="socials[1]"
      aria-label="twitter"
      rel="nofollow"
      target="_blank"
    >
      <base-icon  class="socials__icon" name="twitter"></base-icon>
    </a>
    <a
      v-if="socials[2]"
      class="socials__link"
      :href="socials[2]"
      aria-label="facebook"
      rel="nofollow"
      target="_blank"
    >
      <base-icon  class="socials__icon" name="facebook"></base-icon>
    </a>
    <a
      v-if="socials[3]"
      class="socials__link"
      :href="socials[3]"
      aria-label="instagram"
      rel="nofollow"
      target="_blank"
    >
      <base-icon class="socials__icon" name="instagram"></base-icon>
    </a>
  </div>
</template>

<script setup>
  defineProps({
    socials: {
      type: Array,
      default: () => [],
    },
  })
</script>

<style lang="scss">
  .socials {
    display: flex;
    align-items: center;
    gap: 25px;

    &__icon {
      width: 18px;
      height: 18px;
      @include max-width('md') {
        width: 12px;
        height: 12px;
      }
    }

    &__link {
      display: block;

    }
  }
</style>
