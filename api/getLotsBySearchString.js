import useApi from '@/composables/useApi'

export function getLotsBySearchString(searchString, limit = 10, offset = 0) {
  return useApi('/lots/search/', {
    query: {
      search_string: searchString,
      limit,
      offset,
    },
  })
}
