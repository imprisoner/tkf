<template>
  <NuxtLink class="card card--square col-md-3" :class="classname" :to="link">
    <img
      :id="id"
      class="card--square__img img-resp"
      :class="noImgClass"
      :src="image"
      :alt="title"
      loading="lazy"
    />
    <div class="button button--square button--gray stroked-icon">
      <base-icon name="arrow-down-right"></base-icon>
    </div>
    <h5 class="card--square__title">{{ title }}</h5>
  </NuxtLink>
</template>

<script setup>
  import './m-card.scss'

  const props = defineProps({
    title: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
    id: {
      type: Number,
      default: 0,
    },
    classname: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    noImgClass: {
      type: String,
      default: '',
    }
  })
</script>
