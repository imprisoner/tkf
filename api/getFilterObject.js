import useApi from '@/composables/useApi'
export function getFilterObject(slug) {
  return useApi(`/lots/${slug}/filter-objects`, {
    query: {},
  })
}

export function getFilterAggregation(slug, params) {
  return useApi(`/lots/${slug}/filter-aggregations/`, {
    query: {
      ...params,
    },
  }).data
}
