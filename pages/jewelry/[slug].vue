<template>
  <main id="lot-page" class="catalog">
    <SCatalogTop :name="lot.name" :on-show="false"/>
    <article class="container lot">
      <div class="row lot__top">
        <div
          class="lot__imagebox imagebox offset-lg-1 col-lg-5 col-md-6 col-12"
        >
          <div class="imagebox__image">
            <div v-if="lot.condition == 'NEW'" class="new new--lot">Абсолютно новый</div>
            <img class="img-resp" :src="lot.image || stubBrandImageUrl" alt="" />
          </div>
          <div class="imagebox__thumbnails">
            <div class="imagebox__thumb">
              <img class="img-resp" :src="lot.image || stubBrandImageUrl" alt="" />
            </div>
          </div>
        </div>
        <div class="lot__details details offset-lg-7 col-lg-5 col-xl-4 col-12">
          <div class="details__top">
            <div class="details__title">
              <h3>{{ lot.name }}</h3>
              <p>{{ lot.brand.name }}</p>
            </div>
            <h3 class="details__price">
              ${{ Math.ceil(lot._value.price_rub).toString().replace(regExp, '$1 ') }}
              <span v-if="priceRub" class="details__price--gray"
                >{{ Math.ceil(lot._value.price_usd).toString().replace(regExp, '$1 ') }} ₽</span
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
          <template v-for="(characteristic, id) in characteristics">
            <div
              v-if="characteristic.value !== '' && characteristic.value !== null && characteristic.value.length !== 0"
              :key="id"
              class="features__col col-xl-6 col-12"
            >
              <template v-if="characteristic.text !== 'Камни'">
                <p class="features__prop"> {{ characteristic.text }} </p>
                <p class="features__val">
                  {{ characteristic.value }}
                </p>
              </template>
              <template v-if="characteristic.text === 'Камни' && characteristic.value.length !== 0">
                <p class="features__prop"> {{ characteristic.text }} </p>
                <div class="features__vals">
                  <p v-for="(stone, idx) in characteristic.value" :key="idx" class="features__val">
                    {{ stone }}
                  </p>
                </div>
              </template>
            </div>
          </template>
        </div>
        <!-- ? для чего тут?-->
        <!-- <div class="button button--gray button--block button--caret col-12">Показать ещё</div> -->
      </div>
      <div class="lot__seller seller row">
        <div class="seller__wrap offset-lg-1 col-md-6 col-12">
          <div v-if="lot.city_location" class="seller__info">
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
            <base-icon name="arrow-down-right"></base-icon>
            <span>Показать все объявления ломбарда <!--(12)--></span>
          </a>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
  import useSeo from "../../composables/useSeo";

  const { slug } = useRoute().params
  const uri = 'http://185.20.226.229/api/v1/lots/jewelry/' + slug
  const { data: lot } = await useFetch(uri, { key: slug });
  const stubBrandImageUrl = '/img/brand_stub.png'

  useHead({
    ...useSeo(useRoute().name,{lotType:lot.value.category?.name || 'Украшение', lotName:lot.value.name,lotImage:lot.value.image})
  })

  const gender = computed(() => {
    let value = '';
    switch(true) {
      case lot._value.gender === 'UNISEX':
        value = 'унисекс';
      break;
      case lot._value.gender === 'MALE':
        value = 'мужской';
      break;
      case lot._value.gender === 'FEMALE':
        value = 'женский';
      break;
    }
    return value;
  });

  const characteristics = [
    {
      text: 'Бренд',
      value: lot._value.brand?.name ?? '',
    },
    {
      text: 'Коллекция',
      value: lot._value?.collection ?? '',
    },
    {
      text: 'Тип',
      value: lot._value.category?.name ?? '',
    },
    {
      text: 'Пол',
      value: gender?.value ?? '',
    },
    {
      text: 'Состояние',
      value: lot._value?.condition === 'NEW' ? 'новый' : 'подержанный',
    },
    {
      text: 'Комплектация',
      value: lot._value?.complete_set === 'FULL' ? 'полная' : 'не комплект',
    },
    {
      text: 'Метал изделия',
      value: lot._value?.metal ?? '',
    },
    {
      text: 'Камни',
      value: lot._value?.stones ?? [],
    },
    {
      text: 'Каратность',
      value: lot._value?.carat ?? '',
    },
    {
      text: 'Размер',
      value: lot._value?.size ?? '',
    },
  ];
</script>

<style lang="scss" scoped>
  #lot-page {
    .s-catalog-top {
      margin-bottom: 72px;

      @include max-width('md') {
        margin-bottom: 12px;
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

    .imagebox__image, .imagebox__thumb {
      position: relative;

      .img-resp {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .imagebox__image {
      height: 523px;

      @include max-width('md') {
        height: 226px;
      }
    }

    .imagebox__thumb {
      height: 108px;

      @include max-width('md') {
        height: 59px;
      }
    }
  }
</style>

