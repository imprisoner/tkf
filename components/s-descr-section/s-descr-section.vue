<template>
  <article v-if="title != '' || text != ''" class="container descr-section">
    <div class="row">
      <div
        class="descr-section__img offset-xl-1 col-xl-5 col-md-6 col-10 offset-1 offset-md-0"
      >
        <BaseIcon name="watch" width="24" hight="24" />
      </div>
      <div class="descr-section__content offset-xl-7 col-xl-4 col-md-6 col-12">
        <div class="logo"><b>Time</b>Keeper</div>
        <h2>{{ title }}</h2>
        <p class="text-16">{{ text }}</p>
        <!-- <small>TimeKeeper 2022/ Все права защищены</small> -->
      </div>
    </div>
  </article>
</template>

<script setup>
  import './s-descr-section.scss'

  defineProps({
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  })
</script>
