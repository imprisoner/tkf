<template>
  <main class="main-page">
<<<<<<< HEAD
    <SIntroMain :offersCards="offersCards" />
    <ads-section :banners="banners"></ads-section>
    <SBrandsSlider :brandsCards="brandsCards" />
    <SOffersSection :offersCards="offersCards" />
    <SAboutSection />
=======
    <section class="title-section container">
      <div class="row">
        <article class="offset-lg-1 col-md-6 col-lg-5 col-12">
          <ui-socials></ui-socials>
          <h1>У нас для Вас много чего есть</h1>
          <p class="text-16">
            People also search for this items also search for this items also
            search for
          </p>
          <ui-search></ui-search>
        </article>
        <div class="offset-md-6 col-md-7 col-lg-6 col-12">
          <single-slider :slides="offersCards"></single-slider>
        </div>
      </div>
    </section>
    <SAdsSection :banners="banners"/>
    <section class="brands-slider container">
      <div class="row">
        <div class="offset-xl-1 col-md-6 col-12">
          <h2>Мировые бренды</h2>
        </div>
        <div class="brands-slider__nav offset-9 col-xl-2 col-md-3">
          <slider-nav></slider-nav>
        </div>
        <div class="offset-xl-1 col-xl-10 col-12">
          <brands-slider :slides="brandsCards"></brands-slider>
        </div>
      </div>
    </section>
    <section class="offers-section container">
      <div class="row">
        <div class="offers-section__title offset-xl-1 col-md-8">
          <h2>Лучшие предложения</h2>
          <p class="text-16">People also search for this items</p>
        </div>
        <div class="offers-section__slider-nav col-xl-2 col-md-3 offset-9">
          <slider-nav></slider-nav>
        </div>
        <div class="offers-section__slider offset-xl-1 col-xl-10 col-md-12">
          <offers-slider :slides="offersCards"></offers-slider>
        </div>
      </div>
      <div class="row">
        <div class="offers-section__ads-1 offset-lg-1 col-lg-5 col-md-6">
          <a class="card" href="#">
            <div class="card__img">
              <img class="img-resp" src="/img/watches_on_arm.png" />
            </div>
            <span class="card__num">01</span>
            <div class="card__content">
              <h3>Лучшие предложения</h3>
              <p class="text-16">People also search for this items</p>
            </div>
          </a>
        </div>
        <div class="offers-section__ads-2 offset-6 col-lg-5 col-md-6">
          <a class="card aspect--17-11" href="#">
            <div class="card__img">
              <img class="img-resp" src="/img/watches_on_arm.png" />
            </div>
            <span class="card__num">01</span>
            <div class="card__content">
              <h3>Лучшие предложения</h3>
              <p class="text-16">People also search for this items</p>
            </div> </a
          ><a class="card aspect--17-11" href="#">
            <div class="card__img">
              <img class="img-resp" src="/img/watches_on_arm.png" />
            </div>
            <span class="card__num">01</span>
            <div class="card__content">
              <h3>Лучшие предложения</h3>
              <p class="text-16">People also search for this items</p>
            </div>
          </a>
        </div>
        <div class="offers-section__novice-title offset-xl-1 col-md-8">
          <h2>Новинки</h2>
        </div>
        <div
          class="offers-section__novice-slider-nav offset-9 col-xl-2 col-md-3"
        >
          <slider-nav></slider-nav>
        </div>
        <div class="offers-section__novice-slider offset-xl-1 col-xl-10 col-12">
          <novice-slider :slides="offersCards"></novice-slider>
        </div>
      </div>
    </section>
    <section class="about-section container">
      <article class="about-section__description row">
        <div class="offset-xl-1 col-md-4 col-lg-3">
          <h2>О проекте</h2>
        </div>
        <div class="offset-4 col-md-8">
          <p class="text-16">
            Учитывая ключевые сценарии поведения, повышение уровня гражданского
            сознания требует от нас анализа системы массового участия.
          </p>
          <p class="text-16">
            Учитывая ключевые сценарии поведения, повышение уровня гражданского
            сознания требует от нас анализа системы массового участия.
          </p>
        </div>
      </article>
      <div class="about-section__cards row">
        <div
          class="about-section__cards-wrapper offset-md-1 col-md-10 offset-lg-0 col-lg-12 offset-xxl-1 col-xxl-10 col-12"
        >
          <div class="card card--square">
            <div class="button button--square button--gray stroked-icon">
              <base-icon name="thumbs-up"></base-icon>
            </div>
            <h5>Актуальные новинки</h5>
          </div>
          <div class="card card--square">
            <div class="button button--square button--gray stroked-icon">
              <base-icon name="package"></base-icon>
            </div>
            <h5>Ломбард</h5>
          </div>
          <div class="card card--square">
            <div class="button button--square button--gray stroked-icon">
              <base-icon name="package"></base-icon>
            </div>
            <h5>Преимущество</h5>
          </div>
          <div class="card card--square">
            <div class="button button--square button--gray stroked-icon">
              <base-icon name="star"></base-icon>
            </div>
            <h5>Преимущество</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="about-section__img offset-xl-1 col-md-6">
          <div>
            <img class="img-resp" src="~/assets/img/watches_main_tr.png" />
          </div>
        </div>
        <div class="offset-7 col-xl-4 col-md-5 offset-xl-8">
          <h2>О проекте</h2>
          <p class="text-16">
            Учитывая ключевые сценарии поведения, повышение уровня гражданского
            сознания требует от нас анализа системы массового участия.
          </p>
        </div>
      </div>
    </section>
>>>>>>> bd49320907934536405f9c6f39378dd50ce3424e
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
    components: { SOffersSection }
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
