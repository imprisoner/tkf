<template>
  <section class="s-brands-slider container">
    <div class="row">
      <div class="offset-xl-1 col-md-6 col-12">
        <h2>Мировые бренды</h2>
      </div>
      <div class="s-brands-slider__nav offset-9 col-xl-2 col-md-3">
        <slider-nav
          @prev="slidePrev()"
          @next="slideNext()">
        </slider-nav>
      </div>
      <div class="offset-xl-1 col-xl-10 col-12 moz-available">
        <swiper v-bind="config" @swiper="onSwiper">
          <swiper-slide v-for="(brand, i) in brandsCards" :key="i">
            <s-brands-card
              :id="brand.id"
              :image="brand.image"
              :name="brand.name"
              :brand-type="brand.is_jewelry_brand ? 'jewelry' : 'watches'"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation, FreeMode } from 'swiper'
  import './s-brands-slider.scss'

  defineProps({
    brandsCards: {
      type: Object,
      default: () => ({}),
    },
  })

  const config = {
    modules: [Navigation, FreeMode],
    navigation: {
      prevEl: '.brands-slider__nav .slider-nav__prev',
      nextEl: '.brands-slider__nav .slider-nav__next',
    },
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

  const sliders = reactive({
    brand: null
  })
  function onSwiper(swiper) {
    sliders.brand = swiper
  }
  function slidePrev() {
    sliders.brand.slidePrev()
  }
  function slideNext() {
    sliders.brand.slideNext()
  }
</script>

<style lang="scss"></style>
