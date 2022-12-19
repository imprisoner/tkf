<template>
  <main id="search">
    <SCatalogTop
      :breadcrumbs="[{ text: 'Поиск' }]"
      :count="getCommonCount"
      :title="searchString"
    />
    <SGoodSection
      :lots-list="lotsResponse.results"
      :sort-types="sortTypes"
      :ordering="ordering"
      :pages-count="getPagesCount"
      :limits="limits"
      :active-limit="perPageLimit"
      :current-page="page"
      @update-limit="updateLimit"
      @update-sort="(value) => (ordering = value)"
      @update-page="(value) => (page = value)"
    />
  </main>
</template>

<script setup>
  import { getLotsBySearchString } from '~/api/getLotsBySearchString'

  const sortTypes = [
    {
      label: 'Сначала новые',
      value: 'update_dt',
    },
    {
      label: 'Сначала старые',
      value: '-update_dt',
    },
    {
      label: 'По возрастанию цены',
      value: 'price_usd',
    },
    {
      label: 'По убыванию цены',
      value: '-price_usd',
    },
  ]
  const limits = [30, 60, 120]

  const route = useRoute()

  const page = ref(1)
  const perPageLimit = ref(limits[0])
  const ordering = ref(sortTypes[0])

  const searchString = computed(() => `${route.query.search_string}`)
  const getCommonCount = computed(
    () => lotsResponse.value.count.toString() ?? 0
  )
  const getPagesCount = computed(() =>
    Math.ceil(getCommonCount.value / perPageLimit.value)
  )
  const getQueryParams = computed(() => {
    return {
      search_string: searchString.value,
      limit: perPageLimit.value,
      offset: perPageLimit.value * (page.value - 1),
      ordering: ordering.value.value,
    }
  })

  const { data: lotsResponse } = await getLotsBySearchString(
    getQueryParams.value
  )

  const updateLotsResponse = async () => {
    const { data } = await getLotsBySearchString(getQueryParams.value)
    lotsResponse.value = data.value
  }

  const updateLimit = (value) => {
    perPageLimit.value = value
    page.value = 1
  }

  watch(
    computed(() => getQueryParams.value),
    updateLotsResponse
  )
</script>

<style lang="scss" scoped>
  #search {
    padding-top: 96px;
    padding-bottom: 212px;

    @include max-width('md') {
      padding-top: 24px;
      padding-bottom: 64px;
    }
  }
</style>
