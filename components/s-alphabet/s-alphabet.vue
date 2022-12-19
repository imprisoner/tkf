<template>
  <div class="alphabet container">
    <div class="row">
      <div class="alphabet__ltrs offset-lg-1 col-lg-10 col-12">
        <div class="alphabet__ltrs-subgrid">
          <button type="button">0-9</button>
          <button v-for="item in alphabet" :key="item.id" type="button">
            {{ item.name }}
          </button>
        </div>
      </div>
    </div>
    <div class="alphabet__body row">
      <div v-for="item in alphabet" class="alphabet__item col-12 row">
        <p class="alphabet__title offset-lg-1">{{ item.name }}</p>
        <div class="alphabet__list row offset-lg-3 col-xl-8 col-md-10 col-8">
          <ul class="col-xl-3 col-md-4 col-12">
            <li v-for="item in brandsMainCards" :key="item.id" class="text-16">
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
          <ul class="col-xl-3 col-md-4 col-12">
            <li v-for="item in brandsMainCards" :key="item.id" class="text-16">
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
          <ul class="col-xl-3 col-md-4 col-12">
            <li v-for="item in brandsMainCards" :key="item.id" class="text-16">
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
          <ul class="col-xl-3 col-md-4 col-12">
            <li v-for="item in brandsMainCards" :key="item.id" class="text-16">
              <a href="#">{{ item.name }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-md-1 col-md-10 col-12">
        <button
          @click="showMore()"
          class="button button--block button--neutral button--caret button-showMore"
          type="button"
        >
          Показать ещё
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-alphabet.scss'
  import { getBrands } from '@/api/getBrands'

  const brandsMainCards = await getBrands({ isShowOnMain: true })

  const alphabet = [
    {
      name: 'a',
      id: 0,
    },
    {
      name: 'b',
      id: 1,
    },
    {
      name: 'c',
      id: 2,
    },
    {
      name: 'd',
      id: 3,
    },
    {
      name: 'e',
      id: 4,
    },
    {
      name: 'f',
      id: 5,
    },
    {
      name: 'g',
      id: 6,
    },
    {
      name: 'h',
      id: 7,
    },
    {
      name: 'i',
      id: 8,
    },
    {
      name: 'k',
      id: 9,
    },
    {
      name: 'l',
      id: 10,
    },
    {
      name: 'm',
      id: 11,
    },
    {
      name: 'n',
      id: 12,
    },
    {
      name: 'o',
      id: 13,
    },
    {
      name: 'p',
      id: 14,
    },
    {
      name: 'q',
      id: 15,
    },
    {
      name: 'r',
      id: 16,
    },
    {
      name: 's',
      id: 17,
    },
    {
      name: 't',
      id: 18,
    },
    {
      name: 'u',
      id: 19,
    },
    {
      name: 'v',
      id: 20,
    },
    {
      name: 'w',
      id: 21,
    },
    {
      name: 'x',
      id: 22,
    },
    {
      name: 'y',
      id: 23,
    },
    {
      name: 'z',
      id: 24,
    },
  ]

  let items = 3

  function showMore() {
    items += 3
    const array = Array.from(document.querySelector('.alphabet__body').children)
    const visibleItems = array.slice(0, items)

    visibleItems.forEach((el) => el.classList.add('is-visible'))
  }
</script>
