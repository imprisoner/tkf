import useApi from '@/composables/useApi'

export function getAboutInfo() {
  return useApi('/pages/about/', {
  }).then((res) => {
    return res.data
  })
}
