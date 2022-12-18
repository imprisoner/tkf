import useApi from '@/composables/useApi'

export function getMainLots() {
  return useApi('/lots/main-page/', {
  }).then((res) => {
    return res.data
  })
}
