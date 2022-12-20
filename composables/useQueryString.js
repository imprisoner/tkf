import { useRoute } from '#app'

export default function () {
  const route = useRoute()
  const getUrlSearchParams = computed(() => route.query)

  const queryParams = ref({ ...getUrlSearchParams.value })

  const updateQueryParams = (newParams) => {
    queryParams.value = {
      ...queryParams.value,
      ...newParams,
    }
  }

  watch(getUrlSearchParams, () => updateQueryParams(getUrlSearchParams.value))

  const getQueryParams = computed(() => queryParams.value)

  return {
    updateQueryParams,
    getQueryParams,
  }
}
