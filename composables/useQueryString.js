import { useRoute } from '#app'

export default function () {
  const route = useRoute()
  const getUrlSearchParams = computed(() => route.query)

  const setUrlSearchParams = (newValues) => {
    navigateTo({
      path: route.fullPath,
      query: { ...getUrlSearchParams.value, ...newValues },
    })
  }

  return {
    getUrlSearchParams,
    setUrlSearchParams,
  }
}
