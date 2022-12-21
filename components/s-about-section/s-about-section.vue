<template>
  <section class="s-about-section container">
    <!--TODO дождаться ответа с бэка по поводу получения данных для верхнего блока-->
    <article class="s-about-section__description row">
      <div class="offset-xl-1 col-md-4 col-lg-3">
        <h2>{{ advantages.title }}</h2>
      </div>
      <div class="offset-4 col-md-8">
        <p class="text-16">
          {{ advantages.content }}
        </p>
      </div>
    </article>
    <div class="s-about-section__cards row">
      <div
        class="s-about-section__cards-wrapper offset-md-1 col-md-10 offset-lg-0 col-lg-12 offset-xxl-1 col-xxl-10 col-12"
      >
      <div v-for="(advantage_img, id) in advantages.images" :key="id" class="card card--square">
        <div class="button button--square button--gray stroked-icon">
          <img :src="advantage_img.image_url" alt="">
        </div>
        <h5 class="card--square__title">{{ advantages.phrases[id] }}</h5>
      </div>
      </div>
    </div>
    <div class="row">
      <div class="s-about-section__img offset-xl-1 col-md-6">
        <div>
          <img class="img-resp" :src="aboutInfo.images[0].image_url" alt="" />
        </div>
      </div>
      <div class="offset-7 col-xl-4 col-md-5 offset-xl-8">
        <h2> {{ aboutInfo.title }} </h2>
        <p class="text-16">
          {{ aboutInfo.content }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-about-section.scss'

  defineProps({
    aboutInfo: {
      type: Object,
      default: () => ({}),
    },

    advantages: {
      type: Object,
      default: () => ({}),
    },
  })
</script>
