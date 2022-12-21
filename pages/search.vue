<template>
  <main v-show="!pending" id="search">
    <SCatalogTop
      :breadcrumbs="[{ text: 'Поиск' }]"
      :count="lotsResponse.count ?? 0"
      :title="
        isEmptyList
          ? getUrlSearchParams.search_string ?? ''
          : 'Ничего не найдено'
      "
    />
    <SGoodSection
      v-show="isEmptyList"
      :lots-list="lotsResponse.results"
      :common-lots-count="lotsResponse.count"
    />
  </main>
</template>

<script setup>
  import { getLotsBySearchString } from '~/api/getLotsBySearchString'
  import useQueryString from '~/composables/useQueryString'

  const { getUrlSearchParams } = useQueryString()

  const { data: lotsResponse, pending } = await getLotsBySearchString(
    getUrlSearchParams.value
  )

  const isEmptyList = computed(() => lotsResponse.value.results?.length)

  watch(getUrlSearchParams, async () => {
    const { data } = await getLotsBySearchString(getUrlSearchParams.value)
    lotsResponse.value = data.value
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
