<template>
  <section class="ads-section container">
    <div v-if="banners" class="row">
      <div
        v-for="(banner, i) in banners"
        :key="i"
        class="col-md-6 col-lg-5 col-12 aspect--17-11"
        :class="{ 'offset-lg-1': !(i % 2) }"
      >
        <nuxt-link class="card" :to="banner.link">
          <div class="card__img">
            <img class="img-resp" :src="banner.image" />
          </div>
          <span class="card__num">{{ `0${i}` }}</span>
          <div class="card__content">
            <h3>{{ banner.title }}</h3>
            <p class="text-16">{{ banner.description }}</p>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script setup>
  const props = defineProps({
    banners: {
      type: Array,
      default: () => [],
    },
  })
</script>

<style lang="scss" scoped>
  .ads-section {
    @include max-width('md') {
      .row {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
      }
    }
  }
</style>
