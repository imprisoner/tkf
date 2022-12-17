<template>
  <div class="socials">
    <a href="#" aria-label="instagram" rel="nofollow" target="_blank">
      <base-icon name="instagram"></base-icon>
    </a>
    <a href="#" aria-label="twitter" rel="nofollow" target="_blank">
      <base-icon name="twitter"></base-icon>
    </a>
    <a href="#" aria-label="facebook" rel="nofollow" target="_blank">
      <base-icon name="facebook"></base-icon>
    </a>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .socials {
    display: flex;
    align-items: center;
    gap: 25px;

    a {
      display: block;

      svg {
        width: 18px;
        height: 18px;
      }
    }

    @include max-width('lg') {
      a svg {
        width: 12px;
        height: 12px;
      }
    }
  }
</style>
