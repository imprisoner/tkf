<template>
  <section class="s-intro-main container">
    <div class="row">
      <article class="offset-lg-1 col-md-6 col-lg-5 col-12">
        <ui-socials></ui-socials>
        <h1>У нас для Вас много чего есть</h1>
        <p class="text-16">
          People also search for this items also search for this items also
          search for
        </p>
        <ui-search></ui-search>
      </article>
      <div class="offset-md-6 col-md-7 col-lg-6 col-12">
        <single-slider :slides="offersCards"></single-slider>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-intro-main.scss';

  const props = defineProps({
    offersCards: Array,
    default: () => [],
  })
</script>
