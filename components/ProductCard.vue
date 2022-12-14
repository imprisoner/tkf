<template>
  <div class="product-card" to="#">
    <div class="button button--square button--neutral">
      <base-icon name="heart"></base-icon>
    </div>
    <div class="product-card__img">
      <img class="img-resp" :src="image" :alt="title" />
    </div>
    <nuxt-link to="#">
      <h6 class="product-card__title">
        {{ title }}
        <span>{{ brand }}</span>
      </h6>
    </nuxt-link>
    <p class="product-card__desc">{{ model }}</p>
    <div class="product-card__info">
      <span>Материал корпуса</span>
      <span>{{ material }}</span>
      <span>Местоположение</span>
      <span>{{ `${country}, ${city}` }}</span>
    </div>
    <strong class="product-card__price">
      ${{ usd }}
      <span>{{ rub }} ₽</span>
    </strong>
  </div>
</template>

<script setup>
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

<style lang="scss" scoped>
  .product-card {
    position: relative;
    aspect-ratio: 2 / 3;
    display: flex;
    flex-direction: column;

    .button {
      position: absolute;
      top: 0;
      right: 0;
    }

    &__img {
      background-color: $shadow;
      margin-bottom: 12px;
      flex: 1;
    }

    &__title {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
      margin-bottom: 4px;
    }

    &__desc {
      font-weight: 400;
      font-size: 12px;
      line-height: 15px;
      margin-bottom: 24px;

      @include max-width('md') {
        margin-bottom: 14px;
      }
    }

    // grey text
    &__title span,
    &__desc,
    &__info span:nth-child(2),
    &__price span {
      color: $input;
      opacity: 0.7;
    }

    &__info {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      grid-template-rows: repeat(2, auto);
      column-gap: 36px;
      row-gap: 2px;
      margin-bottom: 24px;

      @include max-width('md') {
        display: none;
      }

      span {
        white-space: nowrap;
        font-size: 12px;
        line-height: 15px;
      }
    }

    &__price {
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
      display: flex;
      gap: 18px;

      @include max-width('md') {
        font-size: 12px;
        line-height: 8px;
      }
    }
  }
</style>
