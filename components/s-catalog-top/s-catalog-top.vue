<template>
  <section class="catalog-top container">
      <div class="row">
          <div class="catalog-top__breadcrumbs offset-lg-1 col-lg-10 col-12">
            <Breadcrumbs />
          </div>
          <div class="catalog-top__title offset-lg-1 col-lg-10 col-12">
              <h2>Все бренды швейцарских часов</h2>
              <span class="text-16">найдено 98 товаров</span>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  setup () {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.catalog-top {

  margin-bottom: 32px;

  &__breadcrumbs {
    margin-bottom: 24px;
  }


  &__title {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;

    >span {
      color: $input;
      display: flex;
      align-items: center;
      gap: 15px;

      &::after,
      &::before {
        content: '';
        width: 1px;
        height: 26px;
        background-color: $light-gray;
      }
    }

  }

  .button {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  .link-btn {
    margin-left: auto;
  }

  @include max-width('md') {
    justify-content: space-between;

    h2 {
      width: 100%;
    }

    &__title {
      >span {
        flex: 1;
        gap: unset;
        justify-content: space-between;
      }

      >span::before {
        display: none;
      }
    }

    .button {
      display: none;
    }

    .link-btn {
      flex: 1;
      justify-content: center;

      @include max-width('md') {
        font-size: 12px;
        line-height: 16px;

        svg {
          width: 12px;
          height: 12px;
        }
      }
    }
  }
}
</style>
