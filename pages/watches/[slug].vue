<template>
  <main id="lot-page" class="catalog">
    <SCatalogTop :breadcrumbs="breadcrumbs"/>
    <article class="container lot">
      <div class="row lot__top">
        <div
          class="lot__imagebox imagebox offset-lg-1 col-lg-5 col-md-6 col-12"
        >
          <div class="imagebox__image">
            <img class="img-resp" :src="lot.image" alt="" />
          </div>
          <div class="imagebox__thumbnails">
            <div class="imagebox__thumb">
              <img class="img-resp" :src="lot.image" alt="" />
            </div>
          </div>
        </div>
        <div class="lot__details details offset-lg-7 col-lg-5 col-xl-4 col-12">
          <div class="details__top">
            <div class="details__title">
              <h3>{{ lot.model.name }}</h3>
              <p>{{ lot.brand.name }}</p>
            </div>
            <h3 class="details__price">
              ${{ lot.price_usd }}
              <span v-if="lot.price_rub" class="details__price--gray"
                >{{ lot.price_rub }} ₽</span
              >
            </h3>
            <div class="details__tags">
              <span class="details__tag button button--text-sm">{{ lot.condition == 'NEW' ? 'новый' : 'подержанный' }}</span>
              <span class="details__tag button button--text-sm">{{ lot.is_available == true ? 'В наличии' : 'Нет в наличии' }}</span>
              <span class="details__tag button button--text-sm">{{ lot.complete_set == 'FULL' ? 'полная' : 'не комплект' }}</span>
            </div>
          </div>
          <a
            class="details__link button button--black button--block"
            :href="lot.original_link"
            target="_blank"
            >Купить на сайте продавца</a
          >
          <div v-if="lot.description" class="details__descr">
            <h4>Описание товара</h4>
            <p class="text-16 details__text">{{ lot.description }}</p>
          </div>
        </div>
      </div>
      <div class="lot__features features row">
        <h4 class="offset-lg-1 col-lg-11 col-12">Характеристики</h4>
        <div class="row offset-lg-1 col-lg-11 col-12">
          <div class="features__col col-xl-6 col-12">
            <p class="features__prop">Тип</p>
            <p class="features__val">
              {{ lot.type == '' || lot.type == null ? 'неизвестно' : lot.type }}
            </p>
            <p class="features__prop">Пол</p>
            <p v-if="lot.gender == 'MALE'" class="features__val">мужской</p>
            <p v-else-if="lot.gender == 'FEMALE'" class="features__val">женский</p>
            <p v-else class="features__val"> унисекс</p>
            <p class="features__prop">Состояние</p>
            <p class="features__val">
            {{ lot.condition == 'NEW' ? 'новый' : 'подержанный' }}
            </p>
            <p class="features__prop">Бренд</p>
            <p class="features__val">
            <!-- {{ lot.brand.name == '' || lot.brand.name == null ? 'неизвестно' : lot.brand.name }} -->
            </p>
            <p class="features__prop">Год выпуска</p>
            <p class="features__val">
              {{
                lot.production_year == '' || lot.production_year == null
                  ? 'неизвестно'
                  : lot.production_year
              }}
            </p>
            <p class="features__prop">Материал корпуса</p>
            <p class="features__val">
            {{ lot.body_material == '' || lot.body_material == null ? 'неизвестно' : lot.body_material }}
            </p>
            <p class="features__prop">Материал браслета</p>
            <p class="features__val">
            {{ lot.strap_material == '' || lot.strap_material == null ? 'неизвестно' : lot.strap_material }}
            </p>
          </div>
          <div class="features__col col-xl-6 col-12">
            <p class="features__prop">Водонепроницаемость</p>
            <p class="features__val">
              {{ lot.is_waterproof == false ? 'Нет' : 'Да' }}
            </p>
            <p class="features__prop">Цвет циферблата</p>
            <p class="features__val">
            {{ lot.watch_face_color == '' || lot.watch_face_color == null ? 'неизвестно' : lot.watch_face_color }}
            </p>
            <p class="features__prop">Тип механизма</p>
            <p class="features__val">
            {{ lot.mechanism_type == '' || lot.mechanism_type == null ? 'неизвестно' : lot.mechanism_type }}
            </p>
            <p class="features__prop">Функции</p>
            <p class="features__val">
              <span v-for="(item, i) in lot.function_list" :key="i">{{
                item
              }}</span>
            </p>
            <p class="features__prop">Запас хода</p>
            <p class="features__val">
            {{ lot.power_reserve == '' || lot.power_reserve == null ? 'неизвестно' : lot.power_reserve }}
            </p>
            <p class="features__prop">Калибр</p>
            <p class="features__val">
            {{ lot.caliber == '' || lot.caliber == null ? 'неизвестно' : lot.caliber }}
            </p>
            <p class="features__prop">Комплектация</p>
            <p class="features__val">
              {{ lot.complete_set == 'FULL' ? 'полная' : 'не комплект' }}
            </p>
          </div>
        </div>
        <!-- ? для чего тут?-->
        <!-- <div class="button button--gray button--block button--caret col-12">Показать ещё</div> -->
      </div>
      <div class="lot__seller seller row">
        <div class="seller__wrap offset-lg-1 col-md-6 col-12">
          <div class="seller__info" v-if="lot.city_location">
            <h6 class="seller__subtitle text-16">Продавец</h6>
            <!-- Todo: нет в беке -->
            <!-- <h3>Ломбард Самый Лучший</h3> -->
            <address class="seller__address">
              {{ lot.city_location.country.name }}, {{ lot.city_location.name}}
            </address>
          </div>
          <a
            class="seller__positions button button--black"
            :href="lot.original_link"
            target="_blank">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5858 16L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L16 14.5858V7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.1356 17.973 17.2649 17.9241 17.3828C17.8764 17.498 17.8063 17.6062 17.7136 17.7005C17.7093 17.7049 17.7049 17.7093 17.7005 17.7136C17.5201 17.8907 17.2728 18 17 18H7C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16H14.5858Z"
                fill="currentColor"
              ></path>
            </svg>
            <span>Показать все объявления ломбарда <!--(12)--></span>
          </a>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
  const { slug } = useRoute().params
  const uri = 'http://185.20.226.229/api/v1/lots/watches/' + slug
  const { data: lot } = await useFetch(uri, { key: slug })
  const breadcrumbs = [];
  const routes = useRoute().fullPath.split('/');
  let url = '/';

  for(let i = 0; i < routes.length; i++) {
    if (routes[i] !== '') {
      url += `${routes[i]}/`;
      breadcrumbs.push({
        text: routes[i] === 'watches' ? 'Каталог часов' : lot._value.name,
        route: url,
      });
    }
  }
</script>

<style lang="scss" scoped>
  #lot-page {
    .catalog-top {
      &__breadcrumbs {
        margin-bottom: 12px;
      }

      @include max-width('md') {
        margin-bottom: unset;
      }
    }

    .lot {
      &__top {
        margin-bottom: 72px;

        @media (max-width: 1023px) {
          row-gap: 24px;
          margin-bottom: 24px;
        }
      }
    }

    .imagebox {
      margin-right: -10%;

      @include max-width('lg') {
        margin-right: unset;
      }

      &__image {
        margin-bottom: 16px;
        background-color: $shadow;

        @include max-width('md') {
          margin-bottom: 10px;
        }
      }

      &__thumbnails {
        display: flex;
        gap: 12px;
        height: 110px;

        //
        overflow: hidden;
        //

        @include max-width('md') {
          gap: 8px;
          height: 60px;
        }
      }

      &__thumb {
        aspect-ratio: 1 / 1;
        background-color: $shadow;
      }
    }

    .details {
      &__top,
      &__title,
      &__descr {
        display: flex;
        flex-direction: column;
      }

      &__top {
        gap: 24px;
        margin-bottom: 100px;

        @include max-width('xl') {
          margin-bottom: 48px;
        }

        @include max-width('md') {
          gap: 16px;
          margin-bottom: 24px;
        }
      }

      &__title,
      &__descr {
        gap: 12px;

        @include max-width('md') {
          gap: 12px;
        }
      }

      &__price {
        display: flex;
        gap: 16px;
        @include max-width('md') {
          margin-top: 8px;
          gap: 8px;
        }

        &--gray {
          color: $input;
          @include max-width('md') {
            color: #{$input}d0;
          }
        }
      }

      &__link {
        margin-bottom: 30px;
      }

      &__tags {
        display: flex;
        align-items: center;
        height: 60px;
        gap: 20px;

        @include max-width('md') {
          gap: 14px;
          height: auto;
        }

        &::after {
          content: '';
          border-left: $border;
          height: 44px;

          @include max-width('md') {
            content: none;
          }
        }
      }

      &__tag {
        display: flex;
        align-items: center;
        gap: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;

        @include max-width('md') {
          font-size: 12px;
          line-height: 16px;
          gap: 10px;
        }

        &:before {
          content: '';
          border-right: $border;
          height: 44px;

          @include max-width('md') {
            border: none;
            height: 10px;
            width: 4px;
            transform: rotate(45deg) translateY(-3px);
            border-right: 1px solid $deep-green;
            border-bottom: 1px solid $deep-green;
          }
        }
      }

      &__text {
        color: $input;

        @include max-width('md') {
          font-size: 13px;
          line-height: 20px;
        }
      }
    }

    .features {
      margin-bottom: 112px;
      row-gap: 32px;

      @include max-width('md') {
        row-gap: 16px;
        margin-bottom: 63px;
      }

      .row {
        @include max-width('xl') {
          row-gap: 10px;
        }

        @include max-width('md') {
          row-gap: unset;
        }
      }

      &__col {
        display: grid;
        grid-template-columns: 2fr 3fr;
        column-gap: 30px;
        row-gap: 10px;
        font-size: 14px;
        line-height: 26px;

        @include max-width('lg') {
          padding-top: 24px;
        }

        @include max-width('md') {
          padding-top: unset;
          row-gap: 4px;
          grid-template-columns: 1fr;
          font-size: 13px;
          line-height: 20px;
        }
      }

      &__prop {
        color: $input;
        opacity: 0.93;
      }

      &__val {
        @include max-width('md') {
          margin-bottom: 10px;
        }
      }

      .button--caret {
        flex-direction: row-reverse;
        display: none;

        @include max-width('md') {
          display: flex;
        }
      }
    }

    .seller {
      margin-bottom: 100px;

      @include max-width('md') {
        margin-bottom: 64px;
      }

      &__wrap {
        display: flex;
        flex-direction: column;
        gap: 24px;
      }

      &__info {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      &__subtitle {
        opacity: 0.5;

        @include max-width('md') {
          display: none;
        }
      }

      &__positions {
        max-width: fit-content;

        @include max-width('md') {
          max-width: unset;
          padding-left: 8px;
          padding-right: 8px;
        }
      }
    }
  }
</style>
