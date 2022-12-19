const MAIN_PAGE = 'index'
const BRANDS = 'brands'
const BRANDS_ID = 'brands-id'

export const META_TAGS = {
  [MAIN_PAGE]: {
    title: 'Main page',
    meta: [
      {
        name: 'description',
        content: 'Main page description',
      },
      {
        name: 'keywords',
        content: ''
      },
      {
        name: 'og:title',
        content: ''
      }
    ],
  },
  [BRANDS]: {
    title: 'Brands title',
  },
  [BRANDS_ID]: {
    title: 'Brands title',
  }
}
