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
        loading="lazy"
      />
    </NuxtLink>
    <NuxtLink :to="`/${type}/${lot.slug}`">
      <h6 v-if="lot.brand" class="product-card__title">
        {{ lot.brand.name }}
        <span v-if="lot.v">{{ lot.model.name }}</span>
      </h6>
      <h6 v-if="lot.brand_name" class="product-card__title">
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
      <span v-if="lot.price_usd" class="product-card__price-usd">
        ${{ lot.price_usd?.toString().replace(regExp, '$1 ') }}
      </span>
      <span v-if="lot.price_rub" class="product-card__price-rub">
        {{ lot.price_rub?.toString().replace(regExp, '$1 ') }} ₽
      </span>
    </strong>
  </div>
</template>

<script setup>
  import './m-product-card.scss'

  const regExp = /(\d)(?=(\d\d\d)+(\D|$))/g

  const props = defineProps({
    lot: {
      type: Object,
      default: () => ({}),
    },
  })

  const type = props.lot.type === 'watch' ? 'watches' : 'jewelry'
  const stubBrandImageUrl = '/img/brand_stub.png'
</script>
