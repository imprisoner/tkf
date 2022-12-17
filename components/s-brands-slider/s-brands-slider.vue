<template>
  <section class="s-brands-slider container">
    <div class="row">
      <div class="offset-xl-1 col-md-6 col-12">
        <h2>Мировые бренды</h2>
      </div>
      <div class="s-brands-slider__nav offset-9 col-xl-2 col-md-3">
        <slider-nav @prev="slidePrev" @next="slideNext"></slider-nav>
      </div>
      <div class="offset-xl-1 col-xl-10 col-12">
        <brands-slider :slides="brandsMainCards" @swiper="onSwiper"></brands-slider>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-brands-slider.scss';
  import { getBrands } from '@/api/getBrands'

  const brandsMainCards = await getBrands({ isShowOnMain: true });

  const slider = ref(null)

  function onSwiper(swiperInstance) {
    slider.value = swiperInstance
  }

  function slidePrev() {
    slider.value.slidePrev()
  }
  function slideNext() {
    slider.value.slideNext()
  }
</script>
