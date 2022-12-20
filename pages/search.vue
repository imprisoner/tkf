<template>
  <main id="search">
    <SCatalogTop
      :breadcrumbs="[{ text: 'Поиск' }]"
      :count="lotsResponse.count ?? '0'"
      :title="searchString"
    />
    <SGoodSection
      :lots-response="lotsResponse"
      @update-params="updateQueryParams"
    />
  </main>
</template>

<script setup>
  import { getLotsBySearchString } from '~/api/getLotsBySearchString'

  const route = useRoute()
  const searchString = computed(() => `${route.query.search_string}`)

  const queryParams = ref({})

  const updateQueryParams = (value) => {
    queryParams.value = value
  }

  const getQueryParams = computed(() => ({
    search_string: searchString.value,
    ...queryParams.value,
  }))

  const lotsResponse = ref({})

  const updateLotsResponse = async () => {
    const { data } = await getLotsBySearchString(getQueryParams.value)
    lotsResponse.value = data.value
  }

  watch(getQueryParams, () => {
    updateLotsResponse()
  })
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
