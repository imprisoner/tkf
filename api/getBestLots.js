import useApi from '@/composables/useApi'

export function getBestLots() {
  return useApi('/lots/best-offers/', {
  }).then((res) => {
    return res.data
  })
}
