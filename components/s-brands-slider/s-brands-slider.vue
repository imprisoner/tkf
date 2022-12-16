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
        <brands-slider :slides="brandsCards"></brands-slider>
      </div>
    </div>
  </section>
</template>

<script>
  import './s-brands-slider.scss';

  export default {
    props: {
      brandsCards: {
        type: [Object, Array],
      },
    },
  }
</script>
