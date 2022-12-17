<template>
  <section class="s-brands-slider container">
    <div class="row">
      <div class="offset-xl-1 col-md-6 col-12">
        <h2>Мировые бренды</h2>
      </div>
      <div class="s-brands-slider__nav offset-9 col-xl-2 col-md-3">
        <slider-nav></slider-nav>
      </div>
      <div class="offset-xl-1 col-xl-10 col-12">
        <swiper v-bind="config">
          <swiper-slide v-for="(brand, i) in brandsCards" :key="i">
            <brands-card
              :id="brand.id"
              :image="brand.image"
              :name="brand.name"
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

  const props = defineProps({
    brandsCards: {
      type: Array,
      default: () => [],
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
</script>

<style lang="scss">
  .brands-logo {
    &__overlay {
      position: absolute;
      top: 0;
      padding: 36px;
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
