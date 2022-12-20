<template>
  <div class="product-card">
    <div class="button button--square button--neutral">
      <base-icon name="heart"></base-icon>
    </div>
    <NuxtLink class="product-card__img" :to="`/${type}/${lot.slug}`">
      <img
        class="img-resp"
        :src="lot.image || stubBrandImageUrl"
        :alt="lot.title"
      />
    </NuxtLink>
    <NuxtLink :to="`/${type}/${lot.slug}`">
      <h6 class="product-card__title" v-if="lot.brand">
        {{ lot.brand.name }}
        <span v-if="lot.v">{{ lot.model.name }}</span>
      </h6>
      <h6 class="product-card__title" v-if="lot.brand_name">
        {{ lot.brand_name }}
        <span v-if="lot.brand_name">{{ lot.model_name }}</span>
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
    <strong class="product-card__price">
      ${{ lot.price_usd }}
      <span v-if="lot.price_rub">{{ lot.price_rub }} ₽</span>
    </strong>
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

  // Fix:  Не приходит с бека
  const type = props.lot.type === 'watch' ? 'watches' : 'jewelry'
  const stubBrandImageUrl = '/img/brand_stub.png'
</script>
