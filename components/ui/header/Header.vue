<template>
  <header class="header container">
    <nuxt-link class="logo" href="/"><b>Time</b>Keeper</nuxt-link>
    <!--  -->
    <ui-header-search></ui-header-search>
    <!--  -->
    <div class="header__right">
      <button class="button" type="button">Регистрация</button>
      <button class="button button--black" type="button">
        <base-icon name="arrow-right"></base-icon>
        <span>Войти</span>
      </button>
    </div>
    <div class="header__mobile">
      <ui-socials></ui-socials>
      <div class="call-us">
        <base-icon name="phone"></base-icon>
        <a href="tel:+79099999999">8 909 999 99 99</a>
      </div>
    </div>
  </header>
</template>

<script setup>
  const searchActive = ref(false)
</script>

<style lang="scss">
  .header {
    padding: 24px;
    display: flex;
    align-items: center;
    gap: 30px;

    &__right {
      display: flex;
      align-items: center;
      margin-left: auto;

      .button svg {
        fill: blue;
      }

      .button + .button {
        margin-left: 5px;
      }
    }

    &__bottom {
      padding: 0 28px;
    }

    &__nav {
      background-color: #f8f8f8;
    }

    // mobile only
    @include max-width('xl') {
      padding: 10px 12px;
      background-color: $light-gray;
      height: 40px;

      > *:not(.header__mobile) {
        display: none;
      }
    }

    &__mobile {
      display: none;

      @include max-width('xl') {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;

        svg,
        .socials svg {
          width: 12px;
          height: 12px;
          fill: $stripe;
        }

        .socials {
          gap: 20px;
        }

        .call-us {
          display: flex;
          align-items: center;
          gap: 4px;
          font-weight: 500;
          font-size: 10px;
          line-height: 12px;
          color: $stripe;
        }
      }
    }
  }
</style>
