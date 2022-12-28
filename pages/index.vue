<template>
  <main class="main-page">
    <SIntroMain :offers-cards="mainOffers" />
    <SAdsSection :banners="bannersTop" />
    <SBrandsSlider :brands-cards="brandsMainCards" />
    <SOffersSection
      :offers-cards="bestOffers"
      :title="titleOffers"
      :subtitle="subtitleOffers"
    />
    <SAdsSection :banners="bannersBottom" />
    <SOffersSection
      :offers-cards="newOffers"
      :title="titleNew"
      :subtitle="subtitleNew"
    />
    <SAboutSection :advantages="advantages" :about-info="aboutInfo" />
  </main>
</template>

<script setup>
  import { getBrands } from '@/api/getBrands'
  import { getBanners } from '@/api/getBanners'
  import { getBestLots } from '@/api/getBestLots'
  import { getNewLots } from '@/api/getNewLots'
  import { getMainLots } from '@/api/getMainLots'
  import { getAboutInfo } from '@/api/getAboutInfo'
  import { getAdvantages } from '@/api/getAdvantages'

  const bannersTop = []
  const bannersBottom = []
  const titleOffers = 'Лучшие предложения'
  const subtitleOffers = ''
  const titleNew = 'Новинки'
  const subtitleNew = ''
  const bestOffers = await getBestLots()
  const newOffers = await getNewLots()
  const mainOffers = await getMainLots()
  const aboutInfo = await getAboutInfo()
  const advantages = await getAdvantages()
  const brandsMainCards = await getBrands({ isShowOnMain: true })

  await getBanners({ page: 'MAIN' }).then((response) => {
    Object.entries(response.value).forEach((banner, i) => {
      if (i <= 1) {
        bannersTop.push(banner)
      } else {
        bannersBottom.push(banner)
      }
    })
  })
</script>

<style lang="scss" scoped>
  .main-page {
    @include max-width('md') {
      display: flex;
      flex-direction: column;
      gap: 64px;
    }
  }

  .s-ads-section {
    margin-bottom: 136px;

    @include max-width('md') {
      margin-bottom: unset;
    }
  }
</style>
