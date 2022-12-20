<template>
  <main class="main-page">
    <SIntroMain :offers-cards="mainOffers" />
    <SAdsSection :banners="bannersTop" />
    <SBrandsSlider :brands-cards="brandsCards" />
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
    <SAboutSection :about-info="aboutInfo" />
  </main>
</template>

<script setup>
  import { getBanners } from '@/api/getBanners'
  import { getBestLots } from '@/api/getBestLots'
  import { getNewLots } from '@/api/getNewLots'
  import { getMainLots } from '@/api/getMainLots'
  import { getAboutInfo } from '@/api/getAboutInfo'
  import { getBrands } from '@/api/getBrands'

  const bannersTop = []
  const bannersBottom = []
  const titleOffers = 'Лучшие предложения'
  const subtitleOffers = 'People also search for this items'
  const titleNew = 'Новинки'
  const subtitleNew = 'People also search for this items'
  const bestOffers = await getBestLots()
  const newOffers = await getNewLots()
  const mainOffers = await getMainLots()
  const aboutInfo = await getAboutInfo()
  const brandsCards = await getBrands()

  await getBanners({ page: 'MAIN' }).then((response) => {
    Object.entries(response._value).forEach((banner, i) => {
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

  .ads-section {
    margin-bottom: 136px;

    @include max-width('md') {
      margin-bottom: unset;
    }
  }
</style>
