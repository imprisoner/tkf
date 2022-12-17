<template>
  <swiper v-bind="config" @swiper="onSwiper">
    <swiper-slide v-for="(lot, i) in slides" :key="i">
      <div class="product-card novice-card">
        <div class="button button--square button--neutral">
          <base-icon name="heart"></base-icon>
        </div>
        <div class="product-card__img">
          <img class="img-resp" :src="lot.image" alt="lot.name" />
        </div>
        <h6 class="product-card__title">
          {{ lot.name }}
          <span>{{ lot.brand.name }}</span>
        </h6>
        <strong class="product-card__price">{{ lot.price_usd }}</strong>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper'

  defineProps({
    slides: {
      type: Array,
      default: () => [],
    },
  })

  const emits = defineEmits(['swiper'])

  const config = {
    modules: [Navigation],
    navigation: {
      prevEl: '.offers-section__novice-slider-nav .slider-nav__prev',
      nextEl: '.offers-section__novice-slider-nav .slider-nav__next',
    },
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  }

  function onSwiper(swiper) {
    emits('swiper', {swiper, name: 'novice'})
  }
</script>

<style lang="scss" scoped></style>
