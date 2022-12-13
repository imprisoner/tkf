<template>
  <swiper v-bind="config">
    <swiper-slide v-for="lot in slides">
      <div class="product-card novice-card">
        <div class="btn btn-square btn-neutral">
          <base-icon name="heart"></base-icon>
        </div>
        <div class="product-card__img">
          <img class="img-resp" :src="lot.image" alt="watches">
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
  slides: Array
})

const config = {
  modules: [Navigation],
  navigation: {
    prevEl: '.offers-section__novice-slider-nav .slider-nav__prev',
    nextEl: '.offers-section__novice-slider-nav .slider-nav__next'
  },
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>