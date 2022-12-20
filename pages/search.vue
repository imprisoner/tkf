<template>
  <main id="search">
    <SCatalogTop
      :breadcrumbs="[{ text: 'Поиск' }]"
      :count="lotsResponse.count ?? 0"
      :title="getQueryParams.search_string ?? ''"
    />
    <SGoodSection
      :lots-list="lotsResponse.results"
      :common-lots-count="lotsResponse.count"
      @update-params="updateQueryParams"
    />
  </main>
</template>

<script setup>
  import { getLotsBySearchString } from '~/api/getLotsBySearchString'
  import useQueryString from '~/composables/useQueryString'

  const { getQueryParams, updateQueryParams } = useQueryString()

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
