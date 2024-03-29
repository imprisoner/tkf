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
        <div :id="`alphabet_${id}`" class="alphabet__item col-12 row">
          <div class="alphabet__title offset-lg-1 col-md-2 col-12" @click="showList(brandItem)">
            <p>{{ brandItem.letter.name }}</p>
          </div>
          <div
            v-if="dom.width > 767 || (dom.width < 767 && brandItem.isShowMobile)"
            class="alphabet__list row offset-lg-3 col-xl-8 col-md-10 col-12"
          >
            <ul class="col-12 alphabet__listing">
              <template v-for="(item, idx) in brandItem.items" :key="idx">
                <li
                  v-if="idx < brandItem.count"
                  class="text-16"
                >
                  <NuxtLink :to="`/${item.is_watch_brand === true ? 'watches' : 'jewelry'}?brand=${item.id}`">{{ item.name }}</NuxtLink>
                </li>
              </template>
              <li
                v-if="brandItem.count < brandItem.items.length"
                class="text-16 alphabet__more"
                @click="loadMore(brandItem)"
              >+ Показать ещё 10</li>
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
  import { onMounted, onUnmounted } from 'vue'

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
  ]

  // Собираем бренды и буквы для них
  let brands = reactive(alphabet.map((item) => ({
    letter: item,
    items: getItems(props.brandsItems, item),
    count: 10,
    isShowMobile: false,
  })))

  let items = 0

  const dom = reactive ({
    width: 0,
  }) 

  onMounted(() => {
    adaptiveAlphabet();
    window.addEventListener('resize', debounce(() => adaptiveAlphabet()))
  })

  onUnmounted(() => {
    window.removeEventListener('resize', debounce())
  })

  // Собираем названия начинающиеся с числа
  const brandsByNumber = Object.keys(props.brandsItems)
    .filter((key) => !isNaN(props.brandsItems[key].name[0]))
    .map((key) => props.brandsItems[key])

  // Собираем не пустые массивы брендов
  brands = brands.filter((item) => item.items.length !== 0)
  alphabet = alphabet.filter((item) =>
    brands.find((brand) => item.name === brand.items[0].name[0].toLowerCase())
  )

  // Если есть названия, которые начинаются с числа, вставляем в начало 0-9 в алфавит и создаем массив,
  // который так же вставляем в начало массива брендов
  if (brandsByNumber.length) {
    alphabet.unshift({ name: '0-9', id: 0 })

    brands.unshift({
      letter: alphabet[0],
      items: brandsByNumber,
    })
  }

  // Проходим и ищем какие названия на какую букву начинаются и создаем объект бренда с буквой и массивом названий
  function getItems(items, letter) {
    const itemsArray = Object.keys(items)
      .filter(
        (key) => props.brandsItems[key]?.name[0].toLowerCase() === letter.name
      )
      .map((key) => items[key])

    return itemsArray
  }

  function scrollToBottom(id, i) {
    const elementToScroll = document.querySelector(id) ?? null
    const elements = document.querySelectorAll('.alphabet__item')
    const visibleElements = []
    const btnShowMore = document.querySelector('.button-showMore')
    
    brands[i].isShowMobile = true;

    if (!elementToScroll.classList.contains('is-visible')) {
      elements.forEach((element, idx) => {
        if (idx <= i) {
          element.classList.add('is-visible')
          visibleElements.push(element)
          items = visibleElements.length;
        }
      })
    }

    if (elementToScroll.classList.contains('is-visible')) {
      window.scrollTo({
        top: elementToScroll.offsetTop - 120,
        behavior: 'smooth',
      })
    }

    if (visibleElements.length === elements.length) {
      btnShowMore.style.display = 'none'
    }
  }

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

  function adaptiveAlphabet() {
    dom.width = window.innerWidth; 
  }

  const debounce = (func, wait) => {
    let timeout
    return function executedFunction (...args) {
      const later = () => {
        timeout = null
        func(...args)
      }
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
    }
  }

  function loadMore(item) {
    if (item.count <= item.items.length) {
      item.count += 10;
    }
  }
  
  function showList(item) {
    if (dom.width < 767) {
      item.isShowMobile = !item.isShowMobile;
    }
  }
</script>
