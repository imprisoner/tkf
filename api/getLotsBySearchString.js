import useApi from '@/composables/useApi'

export function getLotsBySearchString(params) {
  return useApi('/lots/search/', {
    query: {
      ...params,
    },
  })
}
