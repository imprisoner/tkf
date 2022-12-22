import useApi from '@/composables/useApi'

export function getCategories({ inComponent }) {
  return useApi('/lots/categories/', {}, inComponent).then((res) => {
    if (res.data) {
      return res.data
    }

    return res
  })
}
