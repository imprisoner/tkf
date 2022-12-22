import useApi from '@/composables/useApi'
export function getWatches(params) {
  return useApi('/lots/watches/', {
    query: {
      limit: 30,
      ordering: 'update_dt',
      ...params,
    },
  })
}
