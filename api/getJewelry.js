import useApi from '@/composables/useApi'
export function getJewelry(params) {
  return useApi('/lots/jewelry/', {
    query: {
      limit: 30,
      ordering: 'update_dt',
      ...params,
    },
  })
}
