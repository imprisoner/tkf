export default function (initial = ref({})) {
  const queryParams = ref({ ...initial.value })

  const updateQueryParams = (newParams) => {
    queryParams.value = {
      ...queryParams.value,
      ...newParams,
    }
  }

  const getQueryParams = computed(() => queryParams.value)

  watch(initial, () => updateQueryParams(initial.value))

  return {
    updateQueryParams,
    getQueryParams,
  }
}
