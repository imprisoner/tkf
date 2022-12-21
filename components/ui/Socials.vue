<template>
  <div class="socials">
    <a
      class="socials__link"
      :href="socials[0]"
      aria-label="instagram"
      rel="nofollow"
      target="_blank"
    >
      <base-icon name="instagram"></base-icon>
    </a>
    <a
      class="socials__link"
      :href="socials[1]"
      aria-label="instagram"
      rel="nofollow"
      target="_blank"
    >
      <base-icon name="instagram"></base-icon>
    </a>
    <a
      class="socials__link"
      :href="socials[2]"
      aria-label="twitter"
      rel="nofollow"
      target="_blank"
    >
      <base-icon name="twitter"></base-icon>
    </a>
    <a
      class="socials__link"
      :href="socials[3]"
      aria-label="facebook"
      rel="nofollow"
      target="_blank"
    >
      <base-icon name="facebook"></base-icon>
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

    &__link {
      display: block;
      width: 18px;
      height: 18px;
      @include max-width('md') {
        width: 12px;
        height: 12px;
      }
    }
  }
</style>
