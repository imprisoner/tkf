import useQueryString from '~/composables/useQueryString'

export default function (commonCount) {
  const { getUrlSearchParams, setUrlSearchParams } = useQueryString()
  const limits = [30, 60, 120]
  const currentPage = ref(1)
  const getOffset = computed(() => perPageLimit.value * (currentPage.value - 1))

  watch(
    computed(() => currentPage.value),
    () => setUrlSearchParams({ offset: getOffset.value })
  )

  const perPageLimit = computed(
    () =>
      limits[limits.findIndex((i) => i === +getUrlSearchParams.value.limit)] ??
      limits[0]
  )

  const getPagesCount = computed(() =>
    Math.ceil(+commonCount.value / (perPageLimit.value ?? limits[0]))
  )

  const updateLimit = (value) => {
    currentPage.value = 1
    setUrlSearchParams({ limit: value })
  }

  const updatePage = (value) => {
    currentPage.value = value
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' })
  }

  return {
    limits,
    updatePage,
    updateLimit,
    currentPage,
    perPageLimit,
    getPagesCount,
  }
}
