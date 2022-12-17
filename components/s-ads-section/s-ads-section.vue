<template>
  <section class="s-ads-section container">
    <div v-if="banners" class="row">

      <template v-for="(banner, i) in banners" :key="i">
        <div
          class="offset-lg-1 col-lg-5 col-md-6"
          v-if="i === 0 && !(banners % 2)"
        >
          <NuxtLink class="card" :to="banner[1].link">
            <div class="card__img">
              <img class="img-resp" :src="banner[1].image" alt="banner.title"/>
            </div>
            <span class="card__num">{{ `0${i + 1}` }}</span>
            <div class="card__content">
              <h3>{{ banner[1].title }}</h3>
              <p class="text-16">{{ banner[1].description }}</p>
            </div>
          </NuxtLink>
        </div>
      </template>

      <template v-if="!(banners % 2)">
        <div
          class="s-ads-section--column offset-6 col-lg-5 col-md-6"
        >
          <template v-for="(banner, i) in banners" :key="i">
            <NuxtLink class="card card aspect--17-11" :to="banner[1].link" v-if="i > 0">
              <div class="card__img">
                <img class="img-resp" :src="banner[1].image" alt="banner.title"/>
              </div>
              <span class="card__num">{{ `0${i + 1}` }}</span>
              <div class="card__content">
                <h3>{{ banner[1].title }}</h3>
                <p class="text-16">{{ banner[1].description }}</p>
              </div>
            </NuxtLink>
          </template>
        </div>
      </template>
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
