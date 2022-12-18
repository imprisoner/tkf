import useApi from '@/composables/useApi'

export function getBanners({ page , limit } = {}) {
  return useApi('/banners/', { query: { page, limit }}).then(res => {
    return res.data
  })
}
