<template>
  <div class="alphabet container">
    <div class="row">
      <div class="alphabet__ltrs offset-lg-1 col-lg-10 col-12">
        <div class="alphabet__ltrs-subgrid">
          <div
            v-for="(letter, id) in alphabet"
            :key="id"
            class="alphabet__button"
            @click="scrollToBottom(`#alphabet_${id}`, id)"
          >
            {{ letter.name }}
          </div>
        </div>
      </div>
    </div>
    <div class="alphabet__body row">
      <template v-for="(brandItem, id) in brands" :key="id">
        <div 
          :id="`alphabet_${id}`"
          class="alphabet__item col-12 row"
        >
          <div class="alphabet__title offset-lg-1 col-md-2 col-12">
            <p>{{ brandItem.letter.name }} </p>
          </div>
          <div class="alphabet__list row offset-lg-3 col-xl-8 col-md-10 col-12">
            <ul class="col-12 alphabet__listing">
              <li v-for="(item, id) in brandItem.items" :key="id" class="text-16">
                <NuxtLink :to="`/brands/${id}`">{{ item.name }}</NuxtLink>
              </li>
              <!-- <li class="text-16 alphabet__more"><a>+ Показать ещё 10</a></li> -->
            </ul>
          </div>
        </div>
      </template>
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

  const props = defineProps({
    brandsItems: {
      type: Array,
      default: () => [],
    },
  })

  let alphabet = [
    { name: '0-9', id: 0 },
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
  ];

  let brands = alphabet.map((item) => ({
    letter: item,
    items: getItems(props.brandsItems, item),
  }));

  brands = brands.filter((item) => item.items.length !== 0);
  alphabet = alphabet.filter((item) => brands.find((brand) => item.name === brand.items[0].name[0].toLowerCase()));

  function getItems(items, letter) {
    const itemsArray = Object.keys(items)
      .filter((key) => props.brandsItems[key]?.name[0].toLowerCase() === letter.name)
      .map((key) => items[key]);

      return itemsArray;
  }

  function scrollToBottom(id, i) {
    const elementToScroll = document.querySelector(id) ?? null;
    const elements = document.querySelectorAll('.alphabet__item');

    if (!elementToScroll.classList.contains('is-visible')) {
      elements.forEach((element, idx) => {
        if (idx <= i) {
          element.classList.add('is-visible');
        }
      });
    }

    if (elementToScroll.classList.contains('is-visible')) {
      window.scrollTo({top: elementToScroll.offsetTop - 120, behavior: 'smooth'});
    }
  }  

  let items = 0

  function showMore() {
    items += 6
    const array = Array.from(document.querySelector('.alphabet__body').children)
    const btnShowMore = document.querySelector('.button-showMore')
    const visibleItems = array.slice(0, items)

    visibleItems.forEach((el) => el.classList.add('is-visible'))

    if (visibleItems.length === brands.length) {
      btnShowMore.style.display = 'none'
    }
  }
</script>
