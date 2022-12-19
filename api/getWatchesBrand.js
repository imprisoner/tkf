import useApi from '@/composables/useApi'

export function getWatchesBrand(params) {
  return useApi('/lots/watches/', {
    query: {
      ...params,
    },
  })
}
