<template>
  <section class="s-intro-main container">
    <div class="row">
      <article class="offset-lg-1 col-md-6 col-lg-5 col-12">
        <ui-socials :socials="contacts.socials"></ui-socials>
        <h1>TimeKeeper: швейцарские часы, ювелирные украшения, аксессуары</h1>
        <p class="text-16">
          Найдите лучшие в мире часы и ювелирные украшения класса люкс
        </p>
        <ui-search active></ui-search>
      </article>
      <div class="offset-md-6 col-md-7 col-lg-6 col-12 moz-available">
        <single-slider :slides="offersCards"></single-slider>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-intro-main.scss';
  import { getContact } from '@/api/getContact';

  const contacts = await getContact();

  defineProps({
    offersCards: {
      type: Object,
      default: () => ({}),
    },
  })
</script>
