import useApi from '@/composables/useApi'

export function getCategories() {
  return useApi('/lots/categories/', {}).then((res) => {
    return res.data
  })
}
