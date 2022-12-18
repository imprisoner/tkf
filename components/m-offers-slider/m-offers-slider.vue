<template>
  <swiper v-bind="config" @swiper="onSwiper">
    <swiper-slide v-for="(lot, i) in slides" :key="i">
      <MProductCard :lot="lot" />
    </swiper-slide>
  </swiper>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper'

  defineProps({
    slides: {
      type: Object,
      default: () => {},
    },
  })

  const emits = defineEmits(['swiper'])

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

  function onSwiper(swiper) {
    emits('swiper', { swiper, name: 'offers' })
  }
</script>

<style lang="scss" scoped></style>
