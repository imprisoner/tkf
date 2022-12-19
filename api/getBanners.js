import useApi from '@/composables/useApi'

export function getBanners({ page , limit } = {}) {
  const limit = limit ?? 0;
  return useApi('/banners/', { query: { page, limit }}).then(res => {
    return res.data
  })
}
