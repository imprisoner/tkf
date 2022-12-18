<template>
  <section class="goods-section container">
    <div class="row goods-section__top">
      <!--      <div class="goods-section__filters offset-lg-1 col-lg-10 col-md-12">-->
      <!--        <SGoodSectionFilters />-->
      <!--      </div>-->
      <div
        class="goods-section__sort col-md-4 offset-lg-1 col-xl-3 col-sm-6 col-12"
      >
        <SGoodSectionSort @sort="handleSort" />
      </div>
      <div class="goods-section__button-group offset-md-9 col-lg-2 col-md-3">
        <div
          class="button button--square button--black"
          @click="emit('updateLimit', 30)"
        >
          30
        </div>
        <div
          class="button button--square button--gray"
          @click="emit('updateLimit', 60)"
        >
          60
        </div>
        <div
          class="button button--square button--neutral"
          @click="emit('updateLimit', 120)"
        >
          120
        </div>
      </div>
    </div>

    <div class="goods-section__wall">
      <div v-for="lot in lotsList" :key="lot.id" class="goods-section__card">
        <m-product-card
          :image="lot.image"
          :title="lot.name"
          :slug="lot.slug"
          :brand="lot.brand_name"
          :city="lot.city_name"
          :material="lot.material_name"
          :country="lot.country_name"
        />
        <!--        :model="lot."-->
        <!--        :usd="lot."-->
        <!--        :rub="lot."-->
        <!--        :repository="lot."-->
      </div>
    </div>

    <div class="row goods-section__bottom">
      <div class="col-12 col-md-10 offset-md-1">
        <button
          class="button button--neutral button--block button--caret"
          type="button"
        >
          Показать ещё
        </button>
        <div class="pagination">
          <button class="button button--square" type="button">
            <base-icon name="chevron-left" />
          </button>
          <button class="button button--square current" type="button">1</button>
          <button class="button button--square" type="button">2</button>
          <button class="button button--square" type="button">3</button>
          <button class="button button--square" type="button">...</button>
          <button class="button button--square" type="button">100</button>
          <button class="button button--square button--neutral" type="button">
            <base-icon name="chevron-right" />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-good-section.scss'

  const handleSort = () => false

  const props = defineProps({
    lotsList: {
      type: Array,
      default: () => [],
    },
  })

  const emit = defineEmits(['updateLimit'])
</script>
