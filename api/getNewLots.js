import useApi from '@/composables/useApi'

export function getNewLots() {
  return useApi('/lots/new/', {
  }).then((res) => {
    return res.data
  })
}
