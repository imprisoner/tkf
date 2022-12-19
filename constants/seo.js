const MAIN_PAGE = 'index'
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
    meta: [
      {
        name: 'og:title',
        content: 'Main page'
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
