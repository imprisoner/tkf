import { useRoute } from '#app'

export default function (commonCount) {
  const route = useRoute()

  const limits = [30, 60, 120]
  const currentPage = ref(+route.query.page || 1)
  const perPageLimit = ref(
    limits[limits.findIndex((i) => i === +route.query.limit)] || limits[0]
  )

  const getPagesCount = computed(() =>
    Math.ceil(+commonCount.value / perPageLimit.value)
  )

  const updateLimit = (value) => {
    perPageLimit.value = value
    currentPage.value = 1
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
