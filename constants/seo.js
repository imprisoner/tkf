const MAIN_PAGE = 'index'
const SEARCH_PAGE = 'search'
const JEWELRY_LIST = 'jewelry'
const JEWELRY_BRANDS = 'jewelry-brands'
const JEWELRY_CATEGORIES = 'jewelry-categories'
const WATCHES_LIST = 'watches'
const WATCHES_BRANDS = 'watches-brands'
const WATCHES_CATEGORIES = 'watches-categories'
const BRANDS = 'brands'
const BRANDS_ID = 'brands-id'

export const DEFAULT_TAGS = {
  title: 'Агрегатор ломбардов | TimeKeeper',
  meta: [
    {
      name: 'description',
      content: 'Найдите свои швейцарские часы или украшения среди тысяч предложений ломбардов',
    },
    {
      name: 'keywords',
      content: 'Швейцарские часы, Золотые украшения, Элитные ломбарды'
    },
  ]
}

export const META_TAGS = {
  [MAIN_PAGE]: {
    title: 'Агрегатор ломбардов TimeKeeper: швейцарские часы, ювелирные украшения, аксессуары',
    meta: [
      {
        name: 'description',
        content: 'Удобный поиск швейцарских часов и ювелирных украшений в агрегаторе ломбардов TimeKeeper'
      },
      {
        name: 'og:title',
        content: 'Агрегатор ломбардов TimeKeeper: швейцарские часы, ювелирные украшения, аксессуары'
      },
      {
        name: 'og:description',
        content: 'Удобный поиск швейцарских часов и ювелирных украшений в агрегаторе ломбардов TimeKeeper'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ]
  },
  [SEARCH_PAGE]: {
    title: 'Поиск наручных часов и ювелирных украшений | TimeKeeper',
    meta: [
      {
        name: 'description',
        content: 'Широкий выбор оригинальных часов и ювелирных украшений ведущих брендов'
      },
      {
        name: 'og:title',
        content: 'Поиск наручных часов и ювелирных украшений | TimeKeeper'
      },
      {
        name: 'og:description',
        content: 'Широкий выбор оригинальных часов и ювелирных украшений ведущих брендов'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ]
  },
  [JEWELRY_LIST]: {
    title: 'Купить ювелирные украшения в ломбарде, каталог ювелирных изделий | TimeKeeper',
    meta: [
      {
        name: 'description',
        content: 'Купить ювелирные украшения в ломбарде. Цены на ювелирные изделия в каталоге агрегатора ломбардов TimeKeeper'
      },
      {
        name: 'og:title',
        content: 'Купить ювелирные украшения в ломбарде, каталог ювелирных изделий | TimeKeeper'
      },
      {
        name: 'og:description',
        content: 'Купить ювелирные украшения в ломбарде. Цены на ювелирные изделия в каталоге агрегатора ломбардов TimeKeeper'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ],
  },
  [JEWELRY_BRANDS]: {
    title: 'Найти ведущие бренды ювелирных украшений | TimeKeeper',
    meta: [
      {
        name: 'description',
        content: 'Откройте для себя ведущие бренды ювелирных украшений в агрегаторе ломбардов TimeKeeper'
      },
      {
        name: 'og:title',
        content: 'Найти ведущие бренды ювелирных украшений | TimeKeeper'
      },
      {
        name: 'og:description',
        content: 'Откройте для себя ведущие бренды ювелирных украшений в агрегаторе ломбардов TimeKeeper'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ],
  },
  [JEWELRY_CATEGORIES]: {
    title: 'Удобный поиск ювелирных украшений в агрегаторе ломбардов | TimeKeeper',
    meta: [
      {
        name: 'description',
        content: 'Агрегатор ломбардов TimeKeeper осуществляет поиск ювелирны украшений. Большой выбор и выгодные цены.'
      },
      {
        name: 'og:title',
        content: 'Удобный поиск ювелирных украшений в агрегаторе ломбардов | TimeKeeper'
      },
      {
        name: 'og:description',
        content: 'Агрегатор ломбардов TimeKeeper осуществляет поиск ювелирны украшений. Большой выбор и выгодные цены.'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ],
  },
  [WATCHES_LIST]: {
    title: 'Купить оригинальные швейцарские часы в ломбарде | TimeKeeper',
    meta: [
      {
        name: 'description',
        content: 'Купить оригинальные швейцарские часы. Цены на наручные швейцарские часы в каталоге агрегатора ломбардов TimeKeeper'
      },
      {
        name: 'og:title',
        content: 'Купить оригинальные швейцарские часы в ломбарде | TimeKeeper'
      },
      {
        name: 'og:description',
        content: 'Купить оригинальные швейцарские часы. Цены на наручные швейцарские часы в каталоге агрегатора ломбардов TimeKeeper'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ],
  },
  [WATCHES_BRANDS]: {
    title: 'Найти ведущие бренды швецарских часов | TimeKeeper',
    meta: [
      {
        name: 'description',
        content: 'Откройте для себя ведущие бренды швейцарских часов в агрегаторе ломбардов TimeKeeper'
      },
      {
        name: 'og:title',
        content: 'Найти ведущие бренды швецарских часов | TimeKeeper'
      },
      {
        name: 'og:description',
        content: 'Откройте для себя ведущие бренды швейцарских часов в агрегаторе ломбардов TimeKeeper'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ],
  },
  [WATCHES_CATEGORIES]: {
    title: 'Удобный поиск швейцарских часов в агрегаторе ломбардов | TimeKeeper',
    meta: [
      {
        name: 'description',
        content: 'Агрегатор ломбардов TimeKeeper осуществляет поиск швейцарских часов. Большой выбор и выгодные цены.'
      },
      {
        name: 'og:title',
        content: 'Удобный поиск швейцарских часов в агрегаторе ломбардов | TimeKeeper'
      },
      {
        name: 'og:description',
        content: 'Агрегатор ломбардов TimeKeeper осуществляет поиск швейцарских часов. Большой выбор и выгодные цены.'
      },
      {
        name: 'og:image',
        content: 'img/logo.svg'
      }
    ],
  },
  [BRANDS]: {
    title: 'Brands title',
  },
  [BRANDS_ID]: {
    title: 'Brands title',
    meta: [
      {
        name: 'og:title',
        content: 'Brands'
      }
    ]
  }
}
