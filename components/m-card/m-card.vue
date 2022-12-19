<template>
  <a class="card card--square col-md-3" :class="classname" :href="link">
    <img class="card--square__img img-resp" :src="image" :alt="title" />
    <div class="button button--square button--gray stroked-icon">
      <base-icon name="arrow-down-right"></base-icon>
    </div>
    <h5 class="card--square__title">{{ title }}</h5>
  </a>
</template>

<script setup>
  import './m-card.scss'

  defineProps({
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    classname: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  })
</script>
