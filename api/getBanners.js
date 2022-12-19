import useApi from '@/composables/useApi'

export function getBanners(requestData) {
  return useApi('/banners', { query: requestData}).then(res => {
    return res.data
  })
}
