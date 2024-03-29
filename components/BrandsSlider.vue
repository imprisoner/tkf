<template>
  <swiper v-bind="config" @swiper="onSwiper">
    <swiper-slide v-for="(brand, i) in slides" :key="i">
      <div class="brands-logo aspect--1-1">
        <img
          class="brands-logo__img img-resp"
          :src="brand.image || stubBrandImageUrl"
          :alt="brand.name"
        />
        <NuxtLink
          :to="`/brands/${brand.id}`"
          class="brands-logo__overlay card card--square"
        >
          <div
            class="brands-logo__arrow button button--square button--gray stroked-icon"
          >
            <base-icon name="arrow-down-right"></base-icon>
          </div>
          <h5 class="card--square__title brands-logo__title">
            {{ brand.name }}
          </h5>
        </NuxtLink>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, FreeMode } from 'swiper'

  defineProps({
    slides: {
      type: Array,
      default: () => [],
    },
  })

  const emits = defineEmits(['swiper'])

  const stubBrandImageUrl = '/img/brand_stub.png'

  const config = {
    modules: [Navigation, FreeMode],
    spaceBetween: 30,
    slidesPerView: 4,
    breakpoints: {
      320: {
        freeMode: {
          enabled: true,
        },
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {},
      1280: {
        slidesPerView: 4,
      },
    },
  }

  function onSwiper(swiper) {
    emits('swiper', swiper)
  }
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
</style>
