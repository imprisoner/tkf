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
export function getWatchesFilterAggregation(params) {
  return useApi('/lots/watches/filter-aggregations/', {
    query: {
      ...params,
    },
  }).data
}
