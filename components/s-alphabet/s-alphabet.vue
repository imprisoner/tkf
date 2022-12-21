<template>
  <div class="alphabet container">
    <div class="row">
      <div class="alphabet__ltrs offset-lg-1 col-lg-10 col-12">
        <div class="alphabet__ltrs-subgrid">
          <button class="alphabet__button" type="button">0-9</button>
          <nuxt-link
            v-for="letter in alphabet"
            :key="letter.id"
            :to="{ hash: `#alphabet_${letter.id}` }"
            class="alphabet__button"
          >
            {{ letter.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="alphabet__body row">
      <div
        v-for="letter in alphabet"
        :id="`alphabet_${letter.id}`"
        :key="letter.id"
        class="alphabet__item col-12 row"
      >
        <div class="alphabet__title offset-lg-1 col-md-2 col-12">
          <p>{{ letter.name }}</p>
        </div>
        <div class="alphabet__list row offset-lg-3 col-xl-8 col-md-10 col-12">
          <ul class="col-12 alphabet__listing">
            <li v-for="item in brandsItems" :key="item.id" class="text-16">
              <NuxtLink :to="`/brands/${item.id}`">{{ item.name }}</NuxtLink>
            </li>
            <!-- <li class="text-16 alphabet__more"><a>+ Показать ещё 10</a></li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="offset-md-1 col-md-10 col-12">
        <button
          v-if="alphabet"
          class="button button--block button--neutral button--caret button-showMore"
          type="button"
          @click="showMore()"
        >
          Показать ещё
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
  import './s-alphabet.scss'

  defineProps({
    brandsItems: {
      type: Array,
      default: () => [],
    },
  })

  const alphabet = [
    { name: 'a', id: 0 },
    { name: 'b', id: 1 },
    { name: 'c', id: 2 },
    { name: 'd', id: 3 },
    { name: 'e', id: 4 },
    { name: 'f', id: 5 },
    { name: 'g', id: 6 },
    { name: 'h', id: 7 },
    { name: 'i', id: 8 },
    { name: 'j', id: 9 },
    { name: 'k', id: 10 },
    { name: 'l', id: 11 },
    { name: 'm', id: 12 },
    { name: 'n', id: 13 },
    { name: 'o', id: 14 },
    { name: 'p', id: 15 },
    { name: 'q', id: 16 },
    { name: 'r', id: 17 },
    { name: 's', id: 18 },
    { name: 't', id: 19 },
    { name: 'u', id: 20 },
    { name: 'v', id: 21 },
    { name: 'w', id: 22 },
    { name: 'x', id: 23 },
    { name: 'y', id: 24 },
    { name: 'z', id: 25 },
  ]

  let items = 0

  function showMore() {
    items += 6
    const array = Array.from(document.querySelector('.alphabet__body').children)
    const btnShowMore = document.querySelector('.button-showMore')
    const visibleItems = array.slice(0, items)

    visibleItems.forEach((el) => el.classList.add('is-visible'))

    if (visibleItems.length === alphabet.length) {
      btnShowMore.style.display = 'none'
    }
  }
</script>
