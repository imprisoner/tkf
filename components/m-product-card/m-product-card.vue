<template>
  <div class="product-card">
    <div class="button button--square button--neutral">
      <base-icon name="heart"></base-icon>
    </div>
    <div class="product-card__img">
      <img class="img-resp" :src="image || stubBrandImageUrl" :alt="title" />
    </div>
    <!-- Todo - добавить вывод ссылки -->
    <NuxtLink to="#">
      <h6 class="product-card__title">
        {{ title }}
        <span>{{ brand }}</span>
      </h6>
    </NuxtLink>
    <p class="product-card__desc">{{ model }}</p>
    <div class="product-card__info">
      <span class="product-card__info-item">Материал корпуса</span>
      <span class="product-card__info-item">{{ material }}</span>
      <span class="product-card__info-item">Местоположение</span>
      <span class="product-card__info-item">{{ `${country}, ${city}` }}</span>
    </div>
    <strong class="product-card__price">
      ${{ usd }}
      <span>{{ rub }} ₽</span>
    </strong>
  </div>
</template>

<script setup>
  import './m-product-card.scss'
  const stubBrandImageUrl = '/img/brand_stub.png'

  defineProps({
    title: {
      type: String,
      default: 'title',
    },
    slug: {
      type: String,
      default: 'slug',
    },
    model: {
      type: String,
      default: 'model',
    },
    brand: {
      type: String,
      default: 'brand',
    },
    image: {
      type: String,
      default: 'image',
    },
    material: {
      type: String,
      default: 'material',
    },
    country: {
      type: String,
      default: 'country',
    },
    city: {
      type: String,
      default: 'city',
    },
    usd: {
      type: String,
      default: '0',
    },
    rub: {
      type: String,
      default: '0',
    },
    repository: {
      type: String,
      default: 'repository',
    },
  })
</script>
