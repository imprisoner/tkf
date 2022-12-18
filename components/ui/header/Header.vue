<template>
  <header ref="header" class="header container">
    <template v-if="isDesktop">
      <NuxtLink class="logo" href="/"><b>Time</b>Keeper</NuxtLink>
      <!--  -->
      <ui-header-search></ui-header-search>
      <!--  -->
      <div class="header__right">
        <button class="button" type="button">Регистрация</button>
        <button class="header__button button button--black" type="button">
          <base-icon name="arrow-right"></base-icon>
          <span>Войти</span>
        </button>
      </div>
    </template>
    <div v-else class="header__mobile">
      <ui-socials class="header__socials"></ui-socials>
      <div class="call-us">
        <base-icon name="phone" class="call-us__icon"></base-icon>
        <a href="tel:+79099999999">8 909 999 99 99</a>
      </div>
    </div>
  </header>
</template>

<script setup>
  const { isDesktop } = useDevice()

  const header = ref()
  onMounted(() => {
    useHeaderHeight().value = header.value.offsetHeight
  })
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
      gap: 5px;
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
    }

    &__socials {
      color: $stripe;

      @include max-width('xl') {
        gap: 20px;
      }
    }

    &__mobile {
      display: none;

      @include max-width('xl') {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: space-between;
      }
    }
  }

  .call-us {
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    color: $stripe;
    &__icon {
      width: 18px;
      height: 18px;
      @include max-width('lg') {
        width: 12px;
        height: 12px;
      }
    }
  }
</style>
