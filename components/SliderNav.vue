<template>
  <div class="slider-nav">
    <button class="btn btn-square btn-gray slider-nav__prev" type="button" @click="prev()">
      <base-icon name="chevron-left"></base-icon>
    </button>
    <button class="btn btn-square btn-white stroked-icon slider-nav__next" type="button" @click="next()">
      <base-icon name="chevron-right"></base-icon>
    </button>
  </div>
</template>

<script setup>
import { useSwiper } from 'swiper/vue';

const props = defineProps({
  outer: Boolean
})

let swiper, prev, next

if (props.outer) { 
  swiper = useSwiper()
}

if (swiper) {
  prev = () => { swiper.value.slidePrev() }
  next = () => { swiper.value.slideNext() }
} else {
  prev = () => { }
  next = () => { }
}

</script>