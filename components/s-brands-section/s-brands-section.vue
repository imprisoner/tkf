<template>
  <div class="brands-section container">
    <div class="row">
      <div class="offset-lg-1 col-lg-10 col-12">
        <div class="brands-section__wall row">
          <div
            class="card card-square col-lg-3 col-6 brands-logo aspect--1-1"
            v-for="brand in brandsCards"
          >
            <img
              class="brands-logo__img img-resp"
              :src="brand.image || stubBrandImageUrl"
            />
            <div class="brands-logo__overlay card card--square">
              <div
                class="brands-logo__arrow button button--square button--gray stroked-icon"
              >
                <base-icon name="arrow-down-right"></base-icon>
              </div>
              <NuxtLink :to="`/brands/${brand.id}`">
                <h5 class="brands-logo__title">
                  {{ brand.name }}
                </h5>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-brands-section.scss'

  const props = defineProps({
    brandsCards: {
      type: Array,
      default: () => [],
    },
  })

  const stubBrandImageUrl = '/img/brand_stub.png'
</script>

<style lang="scss" scoped>
  .brands-logo {
    &__overlay {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;
      transition: opacity 0.8s ease;

      @include max-width('md') {
        padding: 14px;
      }
    }

    &:hover &__img {
      opacity: 0;
    }

    &:hover &__overlay {
      background: black;
      opacity: 1;
      z-index: 2;
    }

    &__title {
      @include max-width('md') {
        font-size: 10px;
        line-height: 12px;
      }
    }

    &__arrow {
      background: rgba(255, 255, 255, 0.45);
      cursor: default;
      @include max-width('md') {
        width: 24px;
        height: 24px;
      }
    }
  }
  .card-square {
    cursor: pointer;
  }
</style>
