<template>
  <main class="error">
    <div class="container">
      <div class="error__wrap row">
        <div class="error__content offset-lg-1 col-lg-4 col-md-5 col-12">
          <span class="error__code">404</span>
          <h3 class="error__message">Страница не найдена</h3>
          <a class="button button--black error__backdrop" href="#">Назад</a>
        </div>
        <div class="error__icon col-md-7 col-12">
          <base-icon name="crystal-xl"></base-icon>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
  .error {
    &__wrap {
      position: absolute;
      left: 28px;
      top: 0;
      bottom: 0;
      right: 28px;
      align-content: flex-end;
      padding-bottom: 220px;
      min-height: 100vh;
      @include max-width('md') {
        padding-bottom: 160px;
      }
    }

    &__content {
      align-self: flex-end;

      @include max-width('md') {
        order: 1;
      }
    }

    &__code {
      font-weight: 300;
      font-size: 67px;
      line-height: 82px;
      margin-bottom: 12px;

      @include max-width('md') {
        font-size: 64px;
        line-height: 78px;
        margin-bottom: unset;
      }
    }

    &__message {
      margin-bottom: 32px;

      @include max-width('md') {
        margin-bottom: unset;
      }
    }

    &__backdrop {
      width: fit-content;

      @include max-width('md') {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }

    &__icon svg {
      @include max-width('xl') {
        width: 100%;
      }
      @include max-width('md') {
        height: auto;
      }
    }
  }
</style>
