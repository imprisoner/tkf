<template>
  <main id="goods-page" class="catalog">
    <SCatalogTop
      :count="lotsResponse.count"
      :title="titleCatalogTop"
      :on-show-bookmark="onShowBookmark"
    />

    <SGoodSection
      :show-filters="true"
      :lots-list="lotsResponse.results"
      :common-lots-count="lotsResponse.count"
      good-type="watches"
    />

    <SAdsSection :banners="banners" />

    <div class="container brands-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Все бренды швейцарских часов</h2>
        </div>
      </div>
    </div>

    <SAlphabet :brands-items="brandsItems" />

    <div class="container cats-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Категории швейцарских часов</h2>
        </div>
      </div>
    </div>

    <SCategoriesSection
      :hardcode-items="cardsItems"
      :stub-brand-image-url="stubBrandImageUrl"
    />

    <SDescrSection :title="aboutPage.title" :text="aboutPage.content" />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'
  import { getBanners } from '@/api/getBanners'
  import { getWatches } from '@/api/getWatches'
  import { getAboutPage } from '@/api/getAboutPage'
  import useQueryString from '~/composables/useQueryString'

  const { getUrlSearchParams } = useQueryString()

  const { data: lotsResponse } = await getWatches(getUrlSearchParams.value)

  // const isEmptyList = computed(() => lotsResponse.value.results?.length)

  watch(getUrlSearchParams, async () => {
    const { data } = await getWatches(getUrlSearchParams.value)
    lotsResponse.value = data.value
  })

  const titleCatalogTop = 'Все мужские часы'
  const onShowBookmark = false
  const banners = []
  await getBanners({ page: 'WATCH' }).then((response) => {
    Object.entries(response._value).forEach((banner) => {
      banners.push(banner)
    })
  })

  const aboutPage = await getAboutPage('WATCH')
  const brandsCards = await getBrands({
    isShowOnMain: false,
    brandType: 'WATCH',
  })
  const brandsItems = brandsCards
  const stubBrandImageUrl = '/img/stub_watch.jpg'
  const cardsItems = [
      {
        name: 'Мужские',
        classname: 'col-lg-3 col-md-6 col-12',
        link: '/watches?gender=MALE',
        image: '/img/stub_watch.jpg',
      },
      {
        name: 'Женские',
        classname: 'col-lg-3 col-md-6 col-12',
        link: '/watches?gender=FEMALE',
        image: '/img/stub_watch.jpg',
      },
      {
        name: 'Новые',
        classname: 'col-lg-3 col-md-6 col-12',
        link: '/watches?condition=NEW',
        image: '/img/stub_watch.jpg',
      },
      {
        name: 'Подержанные',
        classname: 'col-lg-3 col-md-6 col-12',
        link: '/watches?condition=USED',
        image: '/img/stub_watch.jpg',
      },
    ]
</script>

<style lang="scss" scoped>
  #goods-page {
    .goods-section {
      margin-bottom: 200px;
    }

    .s-ads-section {
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
