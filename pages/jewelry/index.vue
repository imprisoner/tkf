<template>
  <main id="goods-page" class="catalog">
    <SCatalogTop
      :count="lotsResponse.count"
      :title="titleCatalogTop"
      :on-show-bookmark="false"
    />

    <SGoodSection
      :show-filters="true"
      :lots-list="lotsResponse.results"
      :common-lots-count="lotsResponse.count"
      good-type="jewelry"
    />

    <SAdsSection :banners="banners" />

    <div class="container brands-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Все бренды ювелирных украшений</h2>
        </div>
      </div>
    </div>

    <SAlphabet :brands-items="brandsItems" />

    <div class="container cats-title">
      <div class="row">
        <div class="offset-lg-1 col-lg-12">
          <h2>Категории ювелирных украшений</h2>
        </div>
      </div>
    </div>

    <SCategoriesSection
      :hardcode-items="cardsItems"
      :categories-items="categoriesItems"
      :stub-brand-image-url="stubBrandImageUrl"
    />

    <SDescrSection :title="aboutPage.title" :text="aboutPage.content" />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'
  import { getBanners } from '@/api/getBanners'
  import { getAboutPage } from '@/api/getAboutPage'
  import useQueryString from '~/composables/useQueryString'
  import { getJewelry } from '~/api/getJewelry'
  import { getCategories } from '@/api/getCategories'

  const categoriesItems = await getCategories({ inComponent: false })

  const { getUrlSearchParams } = useQueryString()

  const { data: lotsResponse } = await getJewelry(getUrlSearchParams.value)

  // const isEmptyList = computed(() => lotsResponse.value.results?.length)

  watch(getUrlSearchParams, async () => {
    const { data } = await getJewelry(getUrlSearchParams.value)
    lotsResponse.value = data.value
  })

  const titleCatalogTop = 'Ювелирные украшения'
  const banners = []
  await getBanners({ page: 'JEWELRY' }).then((response) => {
    Object.entries(response.value).forEach((banner) => {
      banners.push(banner)
    })
  })

  const aboutPage = await getAboutPage('JEWELRY')
  const brandsCards = await getBrands({
    isShowOnMain: false,
    brandType: 'JEWELRY',
  })
  const brandsItems = brandsCards
  const stubBrandImageUrl = '/img/stub_jewelry.jpg'
  const cardsItems = [
    {
      name: 'Мужские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?gender=MALE',
      image: '/img/stub_jewelry_1.png',
    },
    {
      name: 'Женские',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?gender=FEMALE',
      image: '/img/stub_jewelry_2.png',
    },
    {
      name: 'Новые',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?condition=NEW',
      image: '/img/stub_jewelry_3.png',
    },
    {
      name: 'Подержанные',
      classname: 'col-lg-3 col-md-6 col-12',
      link: '/jewelry?condition=USED',
      image: '/img/stub_jewelry_4.png',
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
