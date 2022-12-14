<template>
  <swiper v-bind="config">
    <swiper-slide v-for="(lot, i) in slides" :key="i">
      <product-card
        :title="lot.name"
        :brand="lot.brand.name"
        :model="lot.model.name"
        :slug="lot.slug"
        :repository="'watches'"
        :image="lot.image"
        :usd="lot.price_usd"
        :rub="lot.price_rub"
        :material="lot.body_material"
        :country="lot.city_location.country.name"
        :city="lot.city_location.name"
      >
      </product-card>
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

  const config = {
    modules: [Navigation],
    navigation: {
      prevEl: '.offers-section__slider-nav .slider-nav__prev',
      nextEl: '.offers-section__slider-nav .slider-nav__next',
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      1280: {
        slidesPerView: 3,
        spaceBetween: 88,
      },
    },
  }
</script>

<style lang="scss" scoped></style>
