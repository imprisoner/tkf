<template>
  <swiper
    class="single-slider"
    v-bind="swiperConfig"
    @real-index-change="onIndexChange"
  >
    <swiper-slide v-for="(lot, i) in slides" :key="i">
      <div>
        <img
          class="single-slider__img img-resp"
          :src="lot.image"
          :alt="lot.name"
        />
      </div>
      <div class="single-slider__title">
        <h3 class="single-slider__name">{{ lot.brand_name }}</h3>
        <p class="single-slider__model">{{ lot.model_name }}</p>
      </div>
    </swiper-slide>

    <div class="single-slider__controls">
      <slider-nav inner vertical></slider-nav>
      <span class="single-slider__count">
        {{ counter.current }}
        <small class="single-slider__total">/{{ counter.total }}</small>
      </span>
      <div class="single-slider__scrollbar swiper-scrollbar"></div>
    </div>
  </swiper>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Scrollbar } from 'swiper'

  const props = defineProps({
    slides: {
      type: Object,
      default: () => {},
    },
  })

  const swiperConfig = reactive({
    slidesPerView: 1,
    modules: [Scrollbar],
    scrollbar: {
      el: '.single-slider__scrollbar',
      dragSize: 'auto',
    },
  })

  const counter = reactive({
    current: convertIndex(0),
    total: convertIndex(props.slides.length - 1),
  })

  function convertIndex(val) {
    val = val + 1
    return val < 10 ? '0' + val : val
  }

  function onIndexChange(swiper) {
    counter.current = convertIndex(swiper.activeIndex)
  }
</script>

<style lang="scss" scoped>
  .single-slider {
    aspect-ratio: 6/5;
    width: calc(100% - (100% - 30px * 5) / 6);
    position: relative;
    margin-left: auto;

    @include max-width('xxl') {
      width: 100%;
    }

    // slide

    &__content {
      height: 100%;
    }

    &__content {
      background-color: $shadow;
    }

    &__img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    &__img {
      object-fit: contain;
    }

    &__title {
      position: absolute;
      bottom: 0;
      right: 0;
      left: calc(45% + 60px);
      padding: 32px;
      height: 120px;
      background: rgba(255, 255, 255, 0.6);
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 8px;

      @include max-width('xl') {
        left: 40px;
      }

      @include max-width('lg') {
        height: 80px;
        padding: 20px;
        row-gap: 4px;
      }
    }
    &__name {
      margin-bottom: 8px;

      @include max-width('lg') {
        font-size: 18px;
        line-height: 22px;
      }
    }

    &__model {
      font-size: 14px;
      line-height: 17px;
      @include max-width('lg') {
        font-size: 12px;
        line-height: 15px;
      }
    }

    &__controls {
      position: absolute;
      bottom: 0;
      right: 0;
      z-index: 1;
      display: flex;
      width: 55%;

      @include max-width('xl') {
        left: 0;
        width: unset;
      }
    }

    &__scrollbar {
      height: 4px;
      background-color: $scrollbar-color;
      mix-blend-mode: normal;
      position: static;
    }

    &__drag {
      height: 100%;
      background-color: $stripe;
    }

    &__count {
      font-size: 16px;
      line-height: 21px;
      display: flex;
      position: absolute;
      right: 0;
      top: 16px;
    }
    &__total {
      font-size: 12px;
      line-height: 21px;
      color: #00000030;
    }
  }
</style>
