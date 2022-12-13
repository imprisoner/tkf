<template>
  <section class="ads-section container">
    <div class="row">
      <div class="col-md-6 col-lg-5 col-12 aspect--17-11" v-for="banner, i in banners" :class="{ 'offset-lg-1': !(i % 2) }">
        <nuxt-link class="card" :to="banner.link">
          <div class="card__img">
            <img class="img-resp" :src="banner.image">
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
  banners: Array
})
</script>

<style lang="scss" scoped>
.ads-section {
  @include max-width('md') {
    .row {
      display: flex;
      flex-direction: column;
      row-gap: 20px
    }
  }
}
</style>