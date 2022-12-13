<template>
  <main class="main-page">
    <section class="title-section container">
      <div class="row">
        <article class="offset-lg-1 col-md-6 col-lg-5 col-12">
          <ui-socials></ui-socials>
          <h1>У нас для Вас много чего есть</h1>
          <p class="text-16">
            People also search for this items also search for this items
            also search for
          </p>
          <ui-search></ui-search>
        </article>
        <div class="offset-md-6 col-md-7 col-lg-6 col-12">
          <single-slider :slides="offersCards"></single-slider>
        </div>
      </div>
    </section>
    <ads-section :banners="banners"></ads-section>
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
              <img class="img-resp" src="/img/watches_on_arm.png">
            </div><span class="card__num">01</span>
            <div class="card__content">
              <h3>Лучшие предложения</h3>
              <p class="text-16">People also search for this items</p>
            </div>
          </a>
        </div>
        <div class="offers-section__ads-2 offset-6 col-lg-5 col-md-6">
          <a class="card aspect--17-11" href="#">
            <div class="card__img">
              <img class="img-resp" src="/img/watches_on_arm.png">
            </div><span class="card__num">01</span>
            <div class="card__content">
              <h3>Лучшие предложения</h3>
              <p class="text-16">People also search for this items</p>
            </div>
          </a><a class="card aspect--17-11" href="#">
            <div class="card__img">
              <img class="img-resp" src="/img/watches_on_arm.png">
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
        <div class="offers-section__novice-slider-nav offset-9 col-xl-2 col-md-3">
          <slider-nav></slider-nav>
        </div>
        <div class="offers-section__novice-slider offset-xl-1 col-xl-10 col-12">
          <novice-slider :slides="offersCards"></novice-slider>
        </div>
      </div>
    </section>
    <section class="about-section container">
      <article class="about-section__descr row">
        <div class="offset-xl-1 col-md-4 col-lg-3">
          <h2>О проекте</h2>
        </div>
        <div class="offset-4 col-md-8">
          <p class="text-16">Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас
            анализа системы массового участия. </p>
          <p class="text-16">Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас
            анализа системы массового участия. </p>
        </div>
      </article>
      <div class="about-section__cards row">
        <div class="about-section__cards-wrapper offset-md-1 col-md-10 offset-lg-0 col-lg-12 offset-xxl-1 col-xxl-10 col-12">
          <div class="card card-square">
            <div class="btn btn-square btn-gray stroked-icon">
              <base-icon name="thumbs-up"></base-icon>
            </div>
            <h5>Актуальные новинки</h5>
          </div>
          <div class="card card-square">
            <div class="btn btn-square btn-gray stroked-icon">
              <base-icon name="package"></base-icon>
            </div>
            <h5>Ломбард</h5>
          </div>
          <div class="card card-square">
            <div class="btn btn-square btn-gray stroked-icon">
              <base-icon name="package"></base-icon>
            </div>
            <h5>Преимущество</h5>
          </div>
          <div class="card card-square">
            <div class="btn btn-square btn-gray stroked-icon">
              <base-icon name="star"></base-icon>
            </div>
            <h5>Преимущество</h5>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="about-section__img offset-xl-1 col-md-6">
          <div><img class="img-resp" src="~/assets/img/watches_main_tr.png"></div>
        </div>
        <div class="offset-7 col-xl-4 col-md-5 offset-xl-8">
          <h2>О проекте</h2>
          <p class="text-16">Учитывая ключевые сценарии поведения, повышение уровня гражданского сознания требует от нас
            анализа системы массового участия.</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper'

// dummy data


const banners = [
  {
    title: 'Лучшие предложения 1',
    description: 'People also search for this items',
    link: '#',
    image: '/img/watches_1.png'
  },
  {
    title: 'Лучшие предложения 2',
    description: 'People also search for this items',
    link: '#',
    image: '/img/watches_2.png'
  }
]

const offersCards = [
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
  {
    "id": 0,
    "name": "Submariner",
    "slug": "0sl-1",
    "model": {
      "id": 0,
      "name": "Collection Scatola Franck Muller, 2005 Ref. 5850",
      "brand": {
        "id": 0,
        "name": "Rolex",
        "image": "/img/brand_rolex.png"
      }
    },
    "brand": {
      "id": 0,
      "name": "Rolex",
      "image": "/img/brand_rolex.png"
    },
    "city_location": {
      "id": 0,
      "name": "Москва",
      "country": {
        "id": 0,
        "name": "Россия"
      }
    },
    "body_material": "Металл",
    "price_rub": "204 280",
    "price_usd": "3 404",
    "image": "/img/watches_main_tr.png"
  },
]

const brandsCards = [
  {
    id: 0,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  },
  {
    id: 1,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  },
  {
    id: 2,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  },
  {
    id: 3,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  },
  {
    id: 4,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  },
  {
    id: 5,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  },
  {
    id: 6,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  },
  {
    id: 7,
    name: 'Rolex',
    image: '/img/brand_rolex.png'
  }
]
</script>

<style lang="scss" scoped>
.main-page {

  @include max-width('md') {
    display: flex;
    flex-direction: column;
    gap: 64px;
  }
}

.title-section {
  margin-bottom: 100px;

  @include max-width('lg') {
    margin-bottom: 80px;
  }

  @include max-width('md') {
    padding-top: 32px;
    margin-bottom: 48px;
  }

  .socials {
    margin-top: 72px;
    margin-bottom: 46px;

    @include max-width('lg') {
      margin: 22px 0;
    }

    @include max-width('md') {
      display: none;
    }
  }

  article {
    @include max-width('md') {
      padding-bottom: 42px;
    }

    h1 {
      margin-bottom: 24px;
    }

    p {
      margin-bottom: 30px;

      @include max-width('md') {
        margin-bottom: 24px;
      }
    }
  }
}


.ads-section {
  margin-bottom: 136px;

  @include max-width('md') {
    margin-bottom: unset;
  }
}

.brands-slider {
  background-color: $neutral;
  position: relative;
  padding-top: 110px;
  padding-bottom: 123px;

  @include max-width('md') {
    padding-top: 30px;
    padding-bottom: 60px;
  }


  .row {
    row-gap: 80px;

    @include max-width('md') {
      row-gap: 30px;
    }
  }


  &__nav {
    justify-self: end;
  }

  .slider-nav {
    display: flex;

    @include max-width('md') {
      position: absolute;
      right: 14px;
      bottom: -20px;
    }
  }

  //========== TODO mock slider styles



  // .slider-wrapper {
  //   display: flex;
  //   gap: 30px;
  //   justify-content: center;

  //   @include max-width('md') {
  //     overflow: hidden;
  //   }
  // }

  // .slider-item {
  //   width: calc((100% - 90px) / 4);

  //   @include max-width('lg') {
  //     width: calc((100% - 60px) / 3);
  //   }

  //   @include max-width('lg') {
  //     width: unset;
  //   }

  //   &:last-child {
  //     @include max-width('lg') {
  //       display: none;
  //     }
  //   }
  // }



}

.offers-section {
  padding-top: 140px;
  padding-bottom: 146px;

  @include max-width('lg') {
    padding-top: 60px;
    padding-bottom: 60px;
  }


  @include max-width('md') {
    padding-top: unset;
    padding-bottom: unset;
    display: flex;
    flex-direction: column;
    gap: 64px;
  }

  .row {
    @include max-width('md') {
      display: flex;
      flex-direction: column;

      &:first-child {
        position: relative;
        padding-bottom: 64px;
      }
    }
  }


  // for both sliders 

  .slider-nav {
    @include max-width('md') {
      position: absolute;
      right: 0;
      bottom: 0;
      display: flex;
    }
  }

  .slider-nav {
    justify-content: end;

  }

  &__title {
    margin-bottom: 64px;

    @include max-width('md') {
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 12px;

      @include max-width('md') {
        margin-bottom: 4px;
      }
    }
  }

  &__slider-nav {
    justify-self: end;

    @include max-width('md') {
      margin-bottom: unset;
      order: 1;
    }
  }

  &__slider {
    margin-bottom: 160px;

    @include max-width('md') {
      margin-bottom: 24px;
    }
  }

  &__ads-1 {
    @include max-width('md') {
      margin-bottom: 64px;
    }
  }

  &__ads-2 {
    display: flex;
    flex-direction: column;
    gap: 30px;

    @include max-width('md') {
      order: 2;
      gap: 20px;
    }
  }

  &__novice-title {
    margin-top: 148px;
    margin-bottom: 100px;

    @include max-width('md') {
      margin-top: unset;
      margin-bottom: 24px;
    }
  }

  &__novice-slider-nav {
    margin-top: 148px;
    justify-self: end;

    @include max-width('md') {
      margin-top: unset;
      margin-bottom: 104px;
      order: 1;
      position: relative;
      // bottom: 20px;

      .slider-nav {
        bottom: -20px;
      }
    }
  }

  &__novice-slider {
    padding-bottom: 156px;
    margin-bottom: 212px;
    position: relative;

    @include max-width('xl') {
      margin-bottom: 120px;
    }

    @include max-width('lg') {
      margin-bottom: unset;
      padding-bottom: 56px;
    }

    &::before {
      content: '';
      background-color: $neutral;
      position: absolute;
      width: calc(100vw - 56px);
      top: 30px;
      right: calc(1px - 50vw + 50% + 28px - 1px);
      bottom: 0;
      z-index: -1;

      @include max-width('xl') {
        width: calc(100vw - 28px);
        right: calc(1px - 50vw + 50% + 14px - 1px);
      }

      @include max-width('md') {
        top: 20px;
        // display: none;
      }
    }
  }
}

.about-section {
  margin-bottom: 264px;

  @include max-width('lg') {
    margin-bottom: 120px;
  }

  &__descr {
    margin-bottom: 104px;

    @include max-width('lg') {
      display: flex;
      flex-direction: column;
      gap: 48px;
      margin-bottom: 60px;
    }

    @include max-width('md') {
      margin-bottom: 24px;
      gap: 16px;
    }

    >div:last-child {
      display: flex;
      gap: 58px;

      @include max-width('lg') {
        flex-direction: column;
        gap: 16px;
      }
    }

    p {
      color: $input;
    }
  }

  &__cards {

    margin-bottom: 240px;

    @include max-width('xl') {
      margin-bottom: 120px;
    }

    @include max-width('lg') {
      row-gap: 30px;
    }

    

    @include max-width('md') {
      margin-bottom: 64px;
    }

    // &>div {
    //   display: flex;
    //   gap: 32px;

    //   @include max-width('md') {
    //     gap: 8px;
    //   }
    // }

    .card-square {
      background-color: $neutral;

      h5 {
        color: black;
        font-size: 22px;
        line-height: 27px;

        @include max-width('md') {
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }

  &__cards-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;

      @include max-width('xl') {
        grid-template-columns: repeat(2, 1fr);
        // grid-template-columns: auto;
      }

      @include max-width('sm') {
        grid-template-columns: repeat(2, 1fr);
        gap: 6px;
      }
    }
  .row:last-child {
    align-items: center;

    h2 {
      margin-bottom: 48px;

      @include max-width('md') {
        margin-bottom: 16px;
      }
    }

    @include max-width('md') {
      display: flex;
      flex-direction: column;
    }
  }

  &__img {

    @include max-width('md') {
      display: flex;
      flex-direction: column;
      order: 1;
      margin-top: 24px;
      height: 300px;
      width: 100%;
    }

    div {
      aspect-ratio: 7 / 5;
      background-color: $shadow;

      @include max-width('md') {
        height: 100%;
        width: 100%;
      }
    }


    img {
      object-fit: contain;
    }
  }

}
</style>