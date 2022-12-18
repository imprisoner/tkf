<template>
  <section class="s-offers-section container">
    <div class="row">
      <div class="s-offers-section__title offset-xl-1 col-md-8">
        <h2>{{ title }}</h2>
        <p class="text-16"> {{ subtitle }} </p>
      </div>
      <div class="s-offers-section__slider-nav col-xl-2 col-md-3 offset-9">
        <slider-nav
          @prev="slidePrev('offers')"
          @next="slideNext('offers')"
        ></slider-nav>
      </div>
      <div class="s-offers-section__slider offset-xl-1 col-xl-10 col-md-12">
        <offers-slider
          :slides="offersCards"
          @swiper="onSliderInit"
        ></offers-slider>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-offers-section.scss'

  defineProps({
    offersCards: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
  })

  const sliders = reactive({
    offers: null,
    novice: null,
  })

  function onSliderInit({ swiper, name }) {
    sliders[name] = swiper
  }

  function slidePrev(name) {
    sliders[name].slidePrev()
  }

  function slideNext(name) {
    sliders[name].slideNext()
  }
</script>
