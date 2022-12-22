import useApi from '@/composables/useApi'
export function getFilterObject(slug) {
  return useApi(`/lots/${slug}/filter-objects`, {
    query: {},
  })
}
