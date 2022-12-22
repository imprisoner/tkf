<template>
  <main id="goods-page" class="catalog">
    <SCatalogTop :count="lotsResponse.count" :title="titleCatalogTop" />

    <SGoodSection
      v-show="isEmptyList"
      :show-filters="true"
      :lots-list="lotsResponse.results"
      :common-lots-count="lotsResponse.count"
    />

    <SAdsSection :banners="banners"/>

    <div class="container brands-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Все бренды швейцарских часов</h2>
        </div>
      </div>
    </div>

    <SAlphabet :brands-items="brandsItems"/>

    <div class="container cats-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Категории швейцарских часов</h2>
        </div>
      </div>
    </div>

    <SCategoriesSection />

    <SDescrSection
        :title="aboutPage.title"
        :text="aboutPage.content"
    />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'
  import { getBanners } from '@/api/getBanners';
  import { getWatchesBrand } from '@/api/getWatchesBrand'
  import { getAboutPage } from '@/api/getAboutPage'
  import useQueryString from '~/composables/useQueryString'

  const { id } = useRoute().params

  const { getUrlSearchParams } = useQueryString()

  const getPageParams = computed(() => ({
    ...getUrlSearchParams.value,
    brand: id,
  }))

  const { data: lotsResponse } = await getWatchesBrand(getPageParams.value)

  const isEmptyList = computed(() => lotsResponse.value.results?.length)

  watch(getPageParams, async () => {
    const { data } = await getWatchesBrand(getPageParams.value)
    lotsResponse.value = data.value
  })

  const titleCatalogTop = "Все мужские часы";
  const banners = [];
  await getBanners({ page: 'WATCH' }).then((response) => {
    Object.entries(response._value).forEach((banner) => {
      banners.push(banner);
    });
  });

  const aboutPage = await getAboutPage('WATCH')
  const brandsCards = await getBrands({ isShowOnMain: false, brandType: 'WATCH' })
  const brandsItems = brandsCards
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
