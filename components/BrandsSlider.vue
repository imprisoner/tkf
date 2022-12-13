<template>
  <swiper v-bind="config">
    <swiper-slide v-for="brand in slides">
      <div class="brands-logo aspect--1-1">
        <img class="img-resp" :src="brand.image">
        <div class="card card-square">
          <div class="btn btn-square btn-gray stroked-icon">
            <base-icon name="arrow-down-right"></base-icon>
          </div>
          <nuxt-link to="/brands">
            <h5>Смотреть весь список</h5>
          </nuxt-link>
        </div>
      </div>
    </swiper-slide>

  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode } from 'swiper'


defineProps({
  slides: Array
})

const config = {
  modules: [Navigation, FreeMode],
  navigation: {
    prevEl: '.brands-slider__nav .slider-nav__prev',
    nextEl: '.brands-slider__nav .slider-nav__next'
  },
  spaceBetween: 30,
  slidesPerView: 4,
  breakpoints: {
    320: {
      freeMode: {
        enabled: true
      },
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      height: 265
    },
    1280: {
      slidesPerView: 4,
      
    }
  }
}
</script>

<style lang="scss" scoped>
.brands-logo {
  display: grid;
  grid-template-columns: 1fr;
  max-height: 265px;
  img,
  .card {
    grid-area: 1 / 1;
  }

  .card {
    opacity: 0;
    transition: opacity .8s ease;
  }

  &:hover {
    img {
      opacity: 0;
    }

    .card {
      background: black;
      opacity: 1;
      z-index: 1;
    }
  }
}


</style>