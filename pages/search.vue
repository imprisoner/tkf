<template>
  <main id="search">
    <SCatalogTop
      :count="lotsResponse.count ?? 0"
      :title="
        hasResults
          ? `Результаты поиска '${getUrlSearchParams.search_string ?? '...'}'`
          : 'Ничего не найдено'
      "
      :btn-show="true"
      :on-show-bookmark="false"
    />
    <SGoodSection
      v-show="hasResults"
      v-if="hasResults"
      :lots-list="lotsResponse.results"
      :common-lots-count="lotsResponse.count"
    />

    <section v-else class="goods-section container">
      <div class="row">
        <div class="offset-lg-1 col-lg-10 col-12">
          <div class="empty-block">
            <div class="empty-block__image">
              <base-icon name="crystal_xl"></base-icon>
            </div>
            <div class="empty-block__title">Пусто</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
  import { getLotsBySearchString } from '~/api/getLotsBySearchString'
  import useQueryString from '~/composables/useQueryString'

  const { getUrlSearchParams } = useQueryString()

  const { data: lotsResponse } = await getLotsBySearchString(
    getUrlSearchParams.value
  )

  const hasResults = computed(() => lotsResponse.value.results?.length)

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
