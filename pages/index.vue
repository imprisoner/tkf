<template>
  <main class="main-page">
    <SIntroMain :offers-cards="offersCards" />
    <SAdsSection :banners="bannersTop" />
    <SBrandsSlider />
    <SOffersSection :offers-cards="offersCards" :title="titleOffers" :subtitle="subtitleOffers" />
    <SAdsSection :banners="bannersBottom" />
    <SOffersSection :offers-cards="offersCards" :title="titleNew" :subtitle="subtitleNew" />
    <SAboutSection />
    {{ banners }}
  </main>
</template>

<script setup>
  import { getBanners } from '@/api/getBanners';

  const bannersTop = [];
  const bannersBottom = [];
  const titleOffers = 'Лучшие предложения';
  const subtitleOffers = 'People also search for this items';
  const titleNew = 'Новинки';
  const subtitleNew = 'People also search for this items';

  const banners = await getBanners({ page: 'MAIN' }).then((response) => {
    Object.entries(response._value).forEach((banner, i) => {
      if (i <= 1) {
        bannersTop.push(banner);
      } else {
        bannersBottom.push(banner);
      }
    })
  });

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
  ];
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
