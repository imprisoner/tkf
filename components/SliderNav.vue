<template>
  <div class="slider-nav" :class="verticalClass">
    <button
      class="button button--square slider-nav__prev"
      type="button"
      @click="prev()"
    >
      <base-icon name="chevron-left"></base-icon>
    </button>
    <button
      class="button button--square slider-nav__next"
      type="button"
      @click="next()"
    >
      <base-icon name="chevron-right"></base-icon>
    </button>
  </div>
</template>

<script setup>
  import { useSwiper } from 'swiper/vue'

  const props = defineProps({
    inner: {
      type: Boolean,
      default: false,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  })

  const emits = defineEmits(['prev', 'next'])

  let swiper

  if (props.inner) {
    swiper = useSwiper()
  }

  let prev, next

  if (swiper) {
    prev = () => {
      swiper.value.slidePrev()
    }
    next = () => {
      swiper.value.slideNext()
    }
  } else {
    prev = () => {
      emits('prev')
    }
    next = () => {
      emits('next')
    }
  }

  const verticalClass = reactive({
    'slider-nav--vertical': props.vertical,
  })
</script>
<style lang="scss" scoped>
  .slider-nav {
    display: flex;

    .button{
      background-color: $white;
      transition: background-color 0.5s;
      &:hover{
        background-color: $gray-100;
      }
    }
    &--vertical {
      display: block;
    }
  }
</style>
