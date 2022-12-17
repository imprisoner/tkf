<template>
  <section class="ads-section container">
    <div v-if="banners" class="row">
      <div
        v-for="(banner, i) in banners"
        :key="i"
        class="col-md-6 col-lg-5 col-12 aspect--17-11"
        :class="{ 'offset-lg-1': !(i % 2) }"
      >
        <NuxtLink class="card" :to="banner.link">
          <div class="card__img">
            <img class="img-resp" :src="banner.image" />
          </div>
          <span class="card__num">{{ `0${i + 1}` }}</span>
          <div class="card__content">
            <h3>{{ banner.title }}</h3>
            <p class="text-16">{{ banner.description }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import './s-ads-section.scss';

  const props = defineProps({
    banners: {
      type: Array,
      default: () => [],
    },
  })
</script>
