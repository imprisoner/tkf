<template>
  <section v-if="banners != ''" class="s-ads-section container">
    <div class="row">

      <template v-for="(banner, i) in banners" :key="i">
        <div
          v-if="i === 0 && !(banners.length % 2)"
          class="offset-lg-1 col-lg-5 col-md-6"
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

      <template v-if="!(banners.length % 2)">
        <div
          class="s-ads-section--column offset-6 col-lg-5 col-md-6"
        >
          <template v-for="(banner, i) in banners" :key="i">
            <NuxtLink v-if="i > 0" class="card" :to="banner[1].link">
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

  defineProps({
    banners: {
      type: Array,
      default: () => [],
    },
  })
</script>
