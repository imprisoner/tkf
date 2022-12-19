<template>
  <div class="card card-square brands-logo aspect--1-1">
    <NuxtLink :to="`/brands/watches`">
      <img
        class="brands-logo__img img-resp"
        :src="image || stubBrandImageUrl"
      />
      <div class="brands-logo__overlay">
        <div
          class="brands-logo__arrow button button--square button--gray stroked-icon"
        >
          <base-icon name="arrow-down-right"></base-icon>
        </div>
        <h5 class="brands-logo__title">
          {{ name }}
        </h5>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
  import './s-brands-card.scss'
  const stubBrandImageUrl = '/img/logo.svg'

  defineProps({
    image: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      default: '',
    },
    repository: {
      type: String,
      required: true,
    },
  })
</script>

<style lang="scss"></style>
