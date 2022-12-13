<template>
  <swiper class="single-slider" v-bind="swiperConfig" @real-index-change="onIndexChange">
    <swiper-slide v-for="lot in slides">
      <div class="single-slider__img">
        <img class="img-resp" :src="lot.image">
      </div>
      <div class="single-slider__title">
        <h3>{{ lot.name }}</h3>
        <p>{{ lot.model.name }}</p>
      </div>
    </swiper-slide>
    
    <div class="single-slider__controls">
      <slider-nav outer></slider-nav>
      <span class="single-slider__count">
        {{ counter.current }}
        <small>/{{ counter.total }}</small>
      </span>
      <div class="single-slider__scrollbar swiper-scrollbar">
      </div>
    </div>
  </swiper>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Scrollbar } from 'swiper'

const props = defineProps({
  slides: Array
})

const swiperConfig = reactive({
  slidesPerView: 1,
  modules: [Scrollbar],
  scrollbar: {
    el: '.single-slider__scrollbar',
    dragSize: 'auto'
  }
})

const counter = reactive({
  current: convertIndex(1),
  total: convertIndex(props.slides.length)
})

function convertIndex(val) {
  return val < 10 ? '0' + val : val
}

function onIndexChange(swiper) {
  counter.current = convertIndex(swiper.activeIndex + 1)
}
</script>

<script>
export default {
  setup() {

  },
}
</script>

<style lang="scss" scoped>
.single-slider {
  aspect-ratio: 6/5;
  width: calc(100% - (100% - 30px *5) / 6);
  position: relative;
  margin-left: auto;

  @include max-width('xxl') {
    width: 100%;
  }

  // slide


  &__content {
    height: 100%;
  }

  // &__slider {
  //   position: relative;
  // }

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


  &__img img {
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

    h3 {
      margin-bottom: 8px;
    }

    p {
      font-size: 14px;
      line-height: 17px;
    }

    @include max-width('lg') {
      h3 {
        font-size: 18px;
        line-height: 22px;
      }

      p {
        font-size: 12px;
        line-height: 15px;
      }
    }
  }

  // controls

  &__controls {
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
    display: flex;
    width: 55%;

    .slider-nav {
      display: block;
    }

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

    small {
      font-size: 12px;
      line-height: 21px;
      color: #00000030;
    }
  }
}
</style>