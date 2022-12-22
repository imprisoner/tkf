<template>
  <main id="goods-page" class="catalog">
    <SCatalogTop :count="lotsResponse.count" />

    <SGoodSection
      v-show="isEmptyList"
      :show-filters="true"
      :lots-list="lotsResponse.results"
      :common-lots-count="lotsResponse.count"
    />

    <!-- <SAdsSection :banners="banners"/> -->

    <div class="container brands-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Все бренды швейцарских часов</h2>
        </div>
      </div>
    </div>

    <SAlphabet :brands-items="brandsCards" />

    <div class="container cats-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Категории швейцарских часов</h2>
        </div>
      </div>
    </div>

    <SCategoriesSection />

    <SDescrSection
      :title="titleDescriptionSection"
      :text="textDescriptionSection"
    />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'
  import { getWatchesBrand } from '@/api/getWatchesBrand'
  import useQueryString from '~/composables/useQueryString'

  const { id } = useRoute().params

  const { getUrlSearchParams } = useQueryString()

  const getPageParams = computed(() => ({
    ...getUrlSearchParams.value,
    brand: id,
  }))

  const { data: lotsResponse, pending } = await getWatchesBrand(
    getPageParams.value
  )

  const isEmptyList = computed(() => lotsResponse.value.results?.length)

  watch(getPageParams, async () => {
    const { data } = await getWatchesBrand(getPageParams.value)
    lotsResponse.value = data.value
  })

  const titleDescriptionSection = 'Описание раздела'
  const textDescriptionSection =
    'Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия. Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас анализа системы массового участия.'

  const brandsCards = await getBrands({ isShowOnMain: true })
</script>

<style lang="scss" scoped>
  #goods-page {
    .goods-section {
      margin-bottom: 200px;
    }

    .ads-section {
      margin-bottom: 226px;
    }

    .brands-title {
      margin-bottom: 72px;
    }

    .cats-title {
      margin-bottom: 80px;
    }

    .alphabet {
      margin-bottom: 224px;
    }

    .categories-section {
      margin-bottom: 200px;
    }

    .descr-section {
      margin-bottom: 152px;
    }

    @include max-width('md') {
      .goods-section,
      .ads-section,
      .alphabet,
      .categories-section {
        margin-bottom: 64px;
      }

      .brands-title,
      .cats-title {
        margin-bottom: 24px;
      }
    }
  }
</style>
