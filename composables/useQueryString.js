import { useRoute } from '#app'

export default function () {
  const route = useRoute()
  const getUrlSearchParams = computed(() => route.query)

  const queryParams = ref({ ...getUrlSearchParams.value })

  const setUrlSearchParams = () => {
    navigateTo({
      path: route.fullPath,
      query: { ...getQueryParams.value },
    })
    console.log(getUrlSearchParams.value)
  }

  // TODO: заменить на что-нибудь более адекватное
  const updateQueryParams = (newParams) => {
    if (getUrlSearchParams.value.search_string) {
      if (
        queryParams.value.search_string !==
        getUrlSearchParams.value.search_string
      ) {
        queryParams.value = {
          search_string: newParams.search_string,
          limit: 30,
          offset: 0,
          ordering: 'update_dt',
        }
      }
    }

    queryParams.value = {
      ...queryParams.value,
      ...newParams,
    }

    setUrlSearchParams()
  }

  watch(getUrlSearchParams, () => updateQueryParams(getUrlSearchParams.value))

  const getQueryParams = computed(() => queryParams.value)

  return {
    updateQueryParams,
    getQueryParams,
  }
}
