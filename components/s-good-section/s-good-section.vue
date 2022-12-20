<template>
  <section class="goods-section container">
    <div class="row goods-section__top">
      <div
        v-if="showFilters === true"
        class="goods-section__filters offset-lg-1 col-lg-10 col-md-12"
      >
        <SGoodSectionFilters />
      </div>
      <div
        class="goods-section__sort col-md-4 offset-lg-1 col-xl-3 col-sm-6 col-12"
      >
        <SGoodSectionSort
          :sort-types="sortTypes"
          :ordering="getActiveOrdering"
          @sort="updateOrdering"
        />
      </div>
      <div class="goods-section__button-group offset-md-9 col-lg-2 col-md-3">
        <div
          v-for="item in limits"
          :key="item"
          :class="[
            'button',
            'button--square',
            perPageLimit === item ? 'button--black' : 'button--neutral',
          ]"
          @click="updateLimit(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="row">
      <div class="offset-lg-1 col-lg-10 col-12">
        <div class="goods-section__wall">
          <div
            v-for="lot in lotsResponse.results"
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
          :current-page="page"
          :pages-count="getPagesCount"
          @update-page="updatePage"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
  import './s-good-section.scss'
  import Pagination from '~/components/Pagination.vue'
  import useSort from '~/composables/useSort'

  const props = defineProps({
    showFilters: {
      type: Boolean,
      default: false,
    },
    lotsResponse: {
      type: Object,
      default: () => ({}),
    },
  })

  const emit = defineEmits(['updateParams'])

  const { sortTypes, getActiveOrdering, updateOrdering } = useSort()

  const limits = [30, 60, 120]
  const page = ref(1)
  const perPageLimit = ref(limits[0])
  const getPagesCount = computed(() =>
    Math.ceil(props.lotsResponse.count / perPageLimit.value)
  )

  const getQueryParams = computed(() => {
    return {
      limit: perPageLimit.value,
      offset: perPageLimit.value * (page.value - 1),
      ordering: getActiveOrdering.value.value,
    }
  })

  const updateLimit = (value) => {
    perPageLimit.value = value
    page.value = 1
  }

  const updatePage = (value) => {
    page.value = value
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  watch(
    computed(() => getQueryParams.value),
    () => emit('updateParams', getQueryParams.value)
  )

  onMounted(() => {
    emit('updateParams', getQueryParams.value)
  })
</script>

<style lang="scss" scoped>
  .button--neutral {
    &:hover {
      background-color: $light-gray;
    }
  }
</style>
