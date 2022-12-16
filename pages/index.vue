<template>
  <main class="main-page">
    <SIntroMain :offersCards="offersCards" />
    <ads-section :banners="banners"></ads-section>
    <SBrandsSlider :brandsCards="brandsCards" />
    <SOffersSection :offersCards="offersCards" />
    <SAboutSection />
  </main>
</template>

<script>
  import { loadBrands } from '~/api/brands';
  import { SOffersSection } from '~~/.nuxt/components';

  export default {
    data() {
        return {
            offersCards: [
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
                {
                    id: 0,
                    name: "Submariner",
                    slug: "0sl-1",
                    model: {
                        id: 0,
                        name: "Collection Scatola Franck Muller, 2005 Ref. 5850",
                        brand: {
                            id: 0,
                            name: "Rolex",
                            image: "/img/brand_rolex.png",
                        },
                    },
                    brand: {
                        id: 0,
                        name: "Rolex",
                        image: "/img/brand_rolex.png",
                    },
                    city_location: {
                        id: 0,
                        name: "Москва",
                        country: {
                            id: 0,
                            name: "Россия",
                        },
                    },
                    body_material: "Металл",
                    price_rub: "204 280",
                    price_usd: "3 404",
                    image: "/img/watches_main_tr.png",
                },
            ],
            banners: [
                {
                    title: "Лучшие предложения 1",
                    description: "People also search for this items",
                    link: "#",
                    image: "/img/watches_1.png",
                },
                {
                    title: "Лучшие предложения 2",
                    description: "People also search for this items",
                    link: "#",
                    image: "/img/watches_2.png",
                },
            ],
        };
    },
    async setup() {
        const brandsCards = await loadBrands({ isShowOnMain: true });
        return {
            brandsCards,
        };
    },
}
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
