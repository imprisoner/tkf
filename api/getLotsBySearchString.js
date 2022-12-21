import useApi from '@/composables/useApi'
export function getLotsBySearchString(params) {
  return useApi('/lots/search/', {
    query: {
      limit: 30,
      ordering: 'update_dt',
      ...params,
    },
  })
}
