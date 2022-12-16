import useApi from '@/composables/useApi'

export function loadBrands({ isShowOnMain } = {}) {
  return useApi('/lots/brands/', { query: { is_show_on_main: isShowOnMain }}).then(res => {
    return res.data
  })
}
