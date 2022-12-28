<template>
  <main id="lot-page" class="catalog">
    <SCatalogTop :name="lot.name" :on-show="false" />
    <article class="container lot">
      <div class="row lot__top">
        <div
          class="lot__imagebox imagebox offset-lg-1 col-lg-5 col-md-6 col-12"
        >
          <div class="imagebox__image">
            <div v-if="lot.condition == 'NEW'" class="new new--lot">Абсолютно новые</div>
            <img
              class="img-resp"
              :src="lot.image || stubBrandImageUrl"
              alt=""
            />
          </div>
          <div class="imagebox__thumbnails">
            <div class="imagebox__thumb">
              <img
                class="img-resp"
                :src="lot.image || stubBrandImageUrl"
                alt=""
              />
            </div>
          </div>
        </div>
        <div class="lot__details details offset-lg-7 col-lg-5 col-xl-4 col-12">
          <div class="details__top">
            <div class="details__title">
              <h3 v-if="lot.model">{{ lot.model.name }}</h3>
              <h3 v-else>{{ lot.name }}</h3>
              <p v-if="lot.brand">{{ lot.brand.name }}</p>
            </div>
            <h3 class="details__price">
              <span v-if="priceUsd">$ {{ priceUsd }}</span>
              <span v-if="priceRub" class="details__price--gray"
                >{{ priceRub }} ₽</span
              >
            </h3>
            <div class="details__tags">
              <span class="details__tag button button--text-sm">{{
                lot.condition == 'NEW' ? 'Новые' : 'Поддержанные'
              }}</span>
              <span
                class="details__tag button button--text-sm"
                :class="lot.is_available != true ? 'details__tag--not-available' : ''"
              >
                {{ lot.is_available == true ? 'В наличии' : 'Нет в наличии' }}
              </span>
              <span class="details__tag button button--text-sm">{{
                lot.complete_set == 'FULL' ? 'Полный' : 'Не комплект'
              }}</span>
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
          <div v-if="characteristics" class="features__col col-xl-6 col-12">
            <template v-for="(characteristic, id) in characteristics">
              <div
                v-if="
                  characteristic.value !== '' &&
                  characteristic.value !== null &&
                  characteristic.value.length !== 0
                "
                :key="id"
                class="features__col col-xl-6 col-12"
              >
                <template v-if="characteristic.text !== 'Функции часов'">
                  <p class="features__prop">{{ characteristic.text }}</p>
                  <p class="features__val">
                    {{ characteristic.value }}
                  </p>
                </template>
                <template
                  v-if="
                    characteristic.text === 'Функции часов' &&
                    characteristic.value.length !== 0
                  "
                >
                  <p class="features__prop">{{ characteristic.text }}</p>
                  <div class="features__vals">
                    <p
                      v-for="(stone, idx) in characteristic.value"
                      :key="idx"
                      class="features__val"
                    >
                      {{ stone }}
                    </p>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </div>
        <!-- ? для чего тут?-->
        <!-- <div class="button button--gray button--block button--caret col-12">Показать ещё</div> -->
      </div>
      <div class="lot__seller seller row">
        <div class="seller__wrap offset-lg-1 col-md-6 col-12">
          <div class="seller__info">
            <h6 class="seller__subtitle text-16">Продавец</h6>
            <h3>{{ sellerName }}</h3>
            <address v-if="lot.city_location" class="seller__address" >
              {{ lot.city_location.country.name }}, {{ lot.city_location.name }}
            </address>
          </div>
          <nuxt-link
            class="seller__positions button button--black"
            :to="`${sellerNameLink[0]}//${sellerNameLink[2]}`"
            target="_blank"
          >
            <base-icon name="arrow-down-right"></base-icon>
            <span>Показать все объявления ломбарда </span>
          </nuxt-link>
        </div>
      </div>
    </article>
  </main>
</template>

<script setup>
  import useSeo from '../../composables/useSeo'

  const regExp = /(\d)(?=(\d\d\d)+([^\d]|$))/g
  const config = useRuntimeConfig()
  const { slug } = useRoute().params
  const uri = `${config.public.apiBase}/lots/watches/` + slug
  const { data: lot } = await useFetch(uri, { key: slug })
  const stubBrandImageUrl = '/img/brand_stub.png'

  useHead({
    ...useSeo(useRoute().name, {
      lotType: 'Часы',
      lotName: lot.value.name,
      lotImage: lot.value.image,
    }),
  })

  const priceRub = computed(() => {
    return lot.value?.price_rub ? Math.ceil(lot.value.price_rub).toString().replace(regExp, '$1 ') : ''
  })

  const priceUsd = computed(() => {
    return lot.value?.price_usd ? Math.ceil(lot.value.price_usd).toString().replace(regExp, '$1 ') : ''
  })

  const gender = computed(() => {
    let value = ''
    switch (true) {
      case lot.value.gender === 'UNISEX':
        value = 'унисекс'
        break
      case lot.value.gender === 'MALE':
        value = 'мужской'
        break
      case lot.value.gender === 'FEMALE':
        value = 'женский'
        break
    }
    return value
  })

const characteristics = computed(() => {
  return [
      {
        text: 'Модель',
        value: lot.value.model?.name ?? '',
      },
      {
        text: 'Бренд',
        value: lot.value?.brand.name ?? '',
      },
      {
        text: 'Материал часов',
        value: lot.value?.body_material ?? '',
      },
      {
        text: 'Материал ремешка',
        value: lot.value?.strap_material ?? '',
      },
      {
        text: 'Водонепроницаемость',
        value: lot.value?.is_waterproof ?? '',
      },
      {
        text: 'Цвет',
        value: lot.value?.watch_face_color ?? '',
      },
      {
        text: 'Функции часов',
        value: lot.value?.function_list ?? [],
      },
      {
        text: 'Ширина',
        value: lot.value?.size_width ?? '',
      },
      {
        text: 'Высота',
        value: lot.value?.size_height ?? '',
      },
      {
        text: 'Год производства',
        value: lot.value?.production_year ?? '',
      },
      {
        text: 'Запас хода',
        value: lot.value?.power_reserve ?? '',
      },
      {
        text: 'Калибр',
        value: lot.value?.caliber ?? '',
      },
      {
        text: 'Пол',
        value: gender?.value ?? '',
      },
      {
        text: 'Состояние',
        value: lot.value?.condition === 'NEW' ? 'новый' : 'подержанный',
      },
      {
        text: 'Комплектация',
        value: lot.value?.complete_set === 'FULL' ? 'полная' : 'не комплект',
      },
    ]
  })
  const sellerNameLink = lot._value.original_link.split('/');
  let sellerName = lot._value.original_link.replace(/https:\/\//, '').replace(/.ru/, '').replace(/\/.*/, '').replace(/-/, ' ');
  sellerName = sellerName[0].toUpperCase() + sellerName.slice(1);
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
        justify-content: space-between;
        height: 60px;
        gap: 20px;

        @include max-width('sm') {
          flex-wrap: wrap;
        }

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
        white-space: nowrap;
        color: #6E6B7B;

        &:first-child {
          padding-left: 0;
        }

        @include max-width('sm') {
          padding: 0;
        }

        @include max-width('md') {
          font-size: 12px;
          line-height: 16px;
          gap: 10px;
        }

        &::before {
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

        &--not-available {
          @include max-width('md') {
            &::before {
              height: 12px;
              background-repeat: no-repeat;
              width: 12px;
              transform: none;
              border: 0;
              background-size: contain;
              background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.00018 10.8002C1.25018 10.9502 1.50018 11.0002 1.75018 11.0002H10.2502C10.6502 11.0002 11.0002 10.8502 11.2502 10.5502C11.5502 10.3002 11.7002 9.9002 11.7002 9.5002C11.7002 9.2502 11.6502 9.0002 11.5002 8.7502L7.30018 1.7002C7.05018 1.3502 6.75018 1.1002 6.35018 1.0002C5.95018 0.900195 5.55018 0.950195 5.20018 1.1502C5.00018 1.2502 4.80018 1.4502 4.70018 1.6502L0.450177 8.7502C0.0501766 9.4502 0.300177 10.4002 1.00018 10.8002ZM1.35018 9.2502L5.55018 2.2002C5.60018 2.1002 5.65018 2.0502 5.75018 2.0002C6.00018 1.9002 6.30018 1.9502 6.45018 2.2002L10.6502 9.2502C10.7002 9.35019 10.7002 9.4002 10.7002 9.5002C10.7002 9.6502 10.6502 9.7502 10.5502 9.85019C10.4502 9.9502 10.3502 10.0002 10.2002 10.0002H1.75018C1.70018 10.0002 1.60018 10.0002 1.55018 9.9502C1.30018 9.80019 1.20018 9.5002 1.35018 9.2502ZM6.50018 6.5002V4.5002C6.50018 4.2002 6.30018 4.0002 6.00018 4.0002C5.70018 4.0002 5.50018 4.2002 5.50018 4.5002V6.5002C5.50018 6.8002 5.70018 7.0002 6.00018 7.0002C6.30018 7.0002 6.50018 6.8002 6.50018 6.5002ZM6.50018 8.5002C6.50018 8.6502 6.45018 8.7502 6.35018 8.8502C6.25018 8.9502 6.15018 9.0002 5.95018 9.0002C5.80018 9.0002 5.70018 8.9502 5.60018 8.8502C5.50018 8.7502 5.45018 8.6502 5.45018 8.5002C5.45018 8.44162 5.46733 8.4002 5.48155 8.36588C5.4916 8.34162 5.50018 8.32091 5.50018 8.3002C5.50018 8.2502 5.55018 8.2002 5.60018 8.1502C5.65018 8.1002 5.70018 8.0502 5.75018 8.0502C5.85018 8.0002 5.95018 8.0002 6.05018 8.0002C6.07893 8.02895 6.09115 8.04117 6.10585 8.04636C6.11671 8.0502 6.12893 8.0502 6.15018 8.0502C6.17518 8.0502 6.18768 8.0627 6.20018 8.0752C6.21268 8.0877 6.22518 8.1002 6.25018 8.1002C6.30018 8.1002 6.35018 8.1502 6.35018 8.1502C6.40018 8.2002 6.45018 8.2502 6.45018 8.3002C6.50018 8.3502 6.50018 8.4502 6.50018 8.5002Z' fill='%23FFBA33'/%3E%3Cmask id='mask0_2230_54095' style='mask-type:alpha' maskUnits='userSpaceOnUse' x='0' y='0' width='12' height='11'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.00018 10.8002C1.25018 10.9502 1.50018 11.0002 1.75018 11.0002H10.2502C10.6502 11.0002 11.0002 10.8502 11.2502 10.5502C11.5502 10.3002 11.7002 9.9002 11.7002 9.5002C11.7002 9.2502 11.6502 9.0002 11.5002 8.7502L7.30018 1.7002C7.05018 1.3502 6.75018 1.1002 6.35018 1.0002C5.95018 0.900195 5.55018 0.950195 5.20018 1.1502C5.00018 1.2502 4.80018 1.4502 4.70018 1.6502L0.450177 8.7502C0.0501766 9.4502 0.300177 10.4002 1.00018 10.8002ZM1.35018 9.2502L5.55018 2.2002C5.60018 2.1002 5.65018 2.0502 5.75018 2.0002C6.00018 1.9002 6.30018 1.9502 6.45018 2.2002L10.6502 9.2502C10.7002 9.35019 10.7002 9.4002 10.7002 9.5002C10.7002 9.6502 10.6502 9.7502 10.5502 9.85019C10.4502 9.9502 10.3502 10.0002 10.2002 10.0002H1.75018C1.70018 10.0002 1.60018 10.0002 1.55018 9.9502C1.30018 9.80019 1.20018 9.5002 1.35018 9.2502ZM6.50018 6.5002V4.5002C6.50018 4.2002 6.30018 4.0002 6.00018 4.0002C5.70018 4.0002 5.50018 4.2002 5.50018 4.5002V6.5002C5.50018 6.8002 5.70018 7.0002 6.00018 7.0002C6.30018 7.0002 6.50018 6.8002 6.50018 6.5002ZM6.50018 8.5002C6.50018 8.6502 6.45018 8.7502 6.35018 8.8502C6.25018 8.9502 6.15018 9.0002 5.95018 9.0002C5.80018 9.0002 5.70018 8.9502 5.60018 8.8502C5.50018 8.7502 5.45018 8.6502 5.45018 8.5002C5.45018 8.44162 5.46733 8.4002 5.48155 8.36588C5.4916 8.34162 5.50018 8.32091 5.50018 8.3002C5.50018 8.2502 5.55018 8.2002 5.60018 8.1502C5.65018 8.1002 5.70018 8.0502 5.75018 8.0502C5.85018 8.0002 5.95018 8.0002 6.05018 8.0002C6.07893 8.02895 6.09115 8.04117 6.10585 8.04636C6.11671 8.0502 6.12893 8.0502 6.15018 8.0502C6.17518 8.0502 6.18768 8.0627 6.20018 8.0752C6.21268 8.0877 6.22518 8.1002 6.25018 8.1002C6.30018 8.1002 6.35018 8.1502 6.35018 8.1502C6.40018 8.2002 6.45018 8.2502 6.45018 8.3002C6.50018 8.3502 6.50018 8.4502 6.50018 8.5002Z' fill='white'/%3E%3C/mask%3E%3Cg mask='url(%23mask0_2230_54095)'%3E%3Crect width='12' height='12' fill='%23FFBA33'/%3E%3C/g%3E%3C/svg%3E%0A");
            }
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

    .imagebox__image,
    .imagebox__thumb {
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
