<template>
  <div class="product-card">
    <div class="button button--square button--neutral">
      <base-icon name="heart"></base-icon>
    </div>
    <div class="product-card__img">
      <img
        class="img-resp"
        :src="lot.image || stubBrandImageUrl"
        :alt="lot.title"
      />
    </div>
    <NuxtLink :to="`/${type}/${lot.slug}`">
      <h6 class="product-card__title">
        <!--TODO дождаться доработки с бэка-->
        {{ lot.model_name }}
        <span>{{ lot.brand_name }}</span>
      </h6>
    </NuxtLink>
    <p class="product-card__desc">{{ lot.name }}</p>
    <div class="product-card__info">
      <template v-if="lot.material_name">
        <span class="product-card__info-item">Материал корпуса</span>
        <span class="product-card__info-item">{{ lot.material_name }}</span>
      </template>
      <template v-if="lot.country_name && lot.city_name">
        <span class="product-card__info-item">Местоположение</span>
        <span class="product-card__info-item">{{
          `${lot.country_name}, ${lot.city_name}`
        }}</span>
      </template>
    </div>
    <!--TODO дождаться доработки с бэка-->
    <!-- <strong class="product-card__price">
      ${{ usd }}
      <span>{{ rub }} ₽</span>
    </strong> -->
  </div>
</template>

<script setup>
  import './m-product-card.scss'

  const props = defineProps({
    lot: {
      type: Object,
      default: () => ({}),
    },
  })
  const type = props.lot.type === 'watch' ? 'watches' : 'jewelry'
  const stubBrandImageUrl = '/img/brand_stub.png'
</script>
