<template>
  <section class="goods-section container">
    <div class="row goods-section__top">
      <!--      <div class="goods-section__filters offset-lg-1 col-lg-10 col-md-12">-->
      <!--        <SGoodSectionFilters />-->
      <!--      </div>-->
      <div
        class="goods-section__sort col-md-4 offset-lg-1 col-xl-3 col-sm-6 col-12"
      >
        <SGoodSectionSort
          :sort-types="sortTypes"
          :ordering="ordering"
          @sort="(value) => emit('updateSort', value)"
        />
      </div>
      <div class="goods-section__button-group offset-md-9 col-lg-2 col-md-3">
        <div
          v-for="item in limits"
          :key="item"
          :class="[
            'button',
            'button--square',
            activeLimit === item ? 'button--black' : 'button--neutral',
          ]"
          @click="emit('updateLimit', item)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="row">
      <div class="offset-lg-1 col-lg-10 col-12">
        <div class="goods-section__wall">
          <div
            v-for="lot in lotsList"
            :key="lot.id"
            class="goods-section__card"
          >
            <m-product-card :lot="lot" />
          </div>
        </div>
      </div>
    </div>

    <div class="row goods-section__bottom">
      <div v-if="pagesCount > 1" class="col-12 col-md-10 offset-md-1">
        <button
          class="button button--neutral button--block button--caret"
          type="button"
          @click="emit('updateLimit', activeLimit + limits[0])"
        >
          Показать ещё
        </button>
        <Pagination
          :current-page="currentPage"
          :pages-count="pagesCount"
          @update-page="(value) => emit('updatePage', value)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-good-section.scss'
  import Pagination from '~/components/Pagination.vue'

  defineProps({
    lotsList: {
      type: Array,
      default: () => [],
    },
    sortTypes: {
      type: Array,
      default: () => [],
    },
    ordering: {
      type: Object,
      default: () => ({}),
    },
    pagesCount: {
      type: Number,
      default: 0,
    },
    limits: {
      type: Array,
      default: () => [],
    },
    activeLimit: {
      type: Number,
      default: 0,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  })

  const emit = defineEmits(['updateLimit', 'updateSort', 'updatePage'])
</script>

<style lang="scss" scoped>
  .button--neutral {
    &:hover {
      background-color: $light-gray;
    }
  }
</style>
