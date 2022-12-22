import useApi from '@/composables/useApi'

export function getAboutPage(type) {
  return useApi('/pages/sections/' + type, {
  }).then((res) => {
    return res.data
  })
}
