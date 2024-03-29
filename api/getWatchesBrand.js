import useApi from '@/composables/useApi'
export function getWatchesBrand(params) {
  return useApi('/lots/watches/', {
    query: {
      limit: 30,
      ordering: 'update_dt',
      ...params,
    },
  })
}
