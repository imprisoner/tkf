<template>
  <section class="goods-section container">
    <slide-transition>
    <SGoodSectionFiltersMobile
      v-if="mobileFiltersShow"
      :common-lots-count="commonLotsCount"
      :good-type="goodType"
      @close="toggleMobileFilters">
    </SGoodSectionFiltersMobile>
    </slide-transition>
    <div class="row goods-section__top">
      <div
        v-if="showFilters === true && isDesktop"
        class="goods-section__filters offset-lg-1 col-lg-10 col-md-12"
      >
        <SGoodSectionFilters
          :common-lots-count="commonLotsCount"
          :good-type="goodType"
        />
      </div>
      <div
        class="goods-section__sort col-md-4 offset-lg-1 col-xl-3 col-11"
      >
        <SGoodSectionSort
          :sort-types="sortTypes"
          :ordering="getActiveOrdering"
          @sort="updateOrdering"
        />
      </div>
      <div class="goods-section__button--group offset-md-9 col-lg-2 col-md-3">
        <template v-if="isDesktop">
        <div
          v-for="item in limits"
          :key="item"
          :class="[
            'button',
            'button--square',
            perPageLimit === item ? 'button--black' : 'button--neutral',
          ]"
          @click="updateLimit(item, true)"
        >
          {{ item }}
        </div>
        </template>
        <div
          v-else
          class="button button--square button--gray stroked-icon filters__button"
          @click="toggleMobileFilters"
        >
          <BaseIcon name="filters" />
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
      <div v-if="getPagesCount > 1" class="col-12 col-md-10 offset-md-1">
        <button
          class="button button--neutral button--block button--caret"
          type="button"
          @click="updateLimit(perPageLimit + limits[0])"
        >
          Показать ещё
        </button>
        <Pagination
          :current-page="currentPage"
          :pages-count="getPagesCount"
          @update-page="updatePage"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-good-section.scss'
  import SlideTransition from "../ui/transitions/SlideTransition";
  import Pagination from '~/components/Pagination.vue'
  import useSort from '~/composables/useSort'
  import usePagination from '~/composables/usePagination'
  import {isDesktop} from "@/utils/queries";

  const mobileFiltersShow = ref(false)
  function toggleMobileFilters(){
    mobileFiltersShow.value = !mobileFiltersShow.value
    if (mobileFiltersShow.value){
      document.documentElement.style.overflow = 'hidden'
    }
    else document.documentElement.style.overflow = 'unset'
  }

  const props = defineProps({
    showFilters: {
      type: Boolean,
      default: false,
    },
    lotsList: {
      type: Array,
      default: () => [],
    },
    commonLotsCount: {
      type: Number,
      default: 0,
    },
    goodType: {
      type: String,
      default: 'watches',
    },
  })

  const { sortTypes, getActiveOrdering, updateOrdering } = useSort()

  const {
    limits,
    updatePage,
    updateLimit,
    currentPage,
    perPageLimit,
    getPagesCount,
  } = usePagination(computed(() => props.commonLotsCount ?? 0))
</script>

<style lang="scss" scoped>
  .button--neutral {
    &:hover {
      background-color: $light-gray;
    }
  }
</style>
