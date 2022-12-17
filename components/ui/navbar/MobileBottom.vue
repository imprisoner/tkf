<template>
  <div class="navbar__mobile-bottom navbar-mobile">
    <a class="navbar-mobile__button button button--gray" href="#">
      <span>Регистрация</span>
    </a>
    <a class="navbar-mobile__button button button--black" href="#">
      <span>Войти</span>
    </a>
  </div>
</template>

<style lang="scss" scoped>
  @include max-width('xl') {
    .navbar-mobile {
      display: flex;
      width: 100%;
      padding-top: 33px;
      margin-top: auto;
      display: flex;
      &__button {
        flex: 1;
      }
    }
  }
</style>
