<template>
  <main id="search">
    <SCatalogTop
      :breadcrumbs="[{ text: 'Поиск' }]"
      :count="getCommonCount"
      :title="searchString"
    />
    <SGoodSection
      :lots-list="lotsResponse.results"
      @update-limit="updateLimit"
    />
  </main>
</template>

<script setup>
  import { getLotsBySearchString } from '~/api/getLotsBySearchString'

  const route = useRoute()
  const searchString = computed(() => `${route.query.search_string}`)

  const perPageLimit = ref(30)
  const page = ref(0)
  const updateLimit = (newLimit) => {
    perPageLimit.value = newLimit
    updateLotsResponse()
  }
  const getOffset = computed(() => perPageLimit.value * page.value)

  const { data: lotsResponse } = await getLotsBySearchString(
    searchString,
    perPageLimit.value,
    getOffset.value
  )

  const updateLotsResponse = async () => {
    const { data } = await getLotsBySearchString(
      searchString,
      perPageLimit.value
    )
    lotsResponse.value = data.value
  }

  const getCommonCount = computed(
    () => lotsResponse.value.count.toString() ?? 0
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
