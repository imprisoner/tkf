<template>
  <main class="main-page">
    <SIntroMain :offers-cards="offersCards" />
    <SAdsSection :banners="banners" />
    <SBrandsSlider :brands-cards="brandsCards" />
    <SOffersSection :offers-cards="offersCards" />
    <SAboutSection />
  </main>
</template>

<script setup>
  import { loadBrands } from '@/api/brands'

  // dummy data

  const banners = [
    {
      title: 'Лучшие предложения 1',
      description: 'People also search for this items',
      link: '#',
      image: '/img/watches_1.png',
    },
    {
      title: 'Лучшие предложения 2',
      description: 'People also search for this items',
      link: '#',
      image: '/img/watches_2.png',
    },
  ]

  const offersCards = [
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
    {
      id: 0,
      name: 'Submariner',
      slug: '0sl-1',
      model: {
        id: 0,
        name: 'Collection Scatola Franck Muller, 2005 Ref. 5850',
        brand: {
          id: 0,
          name: 'Rolex',
          image: '/img/brand_rolex.png',
        },
      },
      brand: {
        id: 0,
        name: 'Rolex',
        image: '/img/brand_rolex.png',
      },
      city_location: {
        id: 0,
        name: 'Москва',
        country: {
          id: 0,
          name: 'Россия',
        },
      },
      body_material: 'Металл',
      price_rub: '204 280',
      price_usd: '3 404',
      image: '/img/watches_main_tr.png',
    },
  ]

  const brandsCards = await loadBrands({ isShowOnMain: true });
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
