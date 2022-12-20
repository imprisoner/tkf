import { useRoute } from '#app'

export default function () {
  const sortTypes = ref([
    {
      label: 'Сначала новые',
      value: 'update_dt',
    },
    {
      label: 'Сначала старые',
      value: '-update_dt',
    },
    {
      label: 'По возрастанию цены',
      value: 'price_usd',
    },
    {
      label: 'По убыванию цены',
      value: '-price_usd',
    },
  ])

  const route = useRoute()

  const activeOrdering = ref(
    route.query.ordering
      ? sortTypes.value[
          sortTypes.value.findIndex((i) => i.value === route.query.ordering) ??
            0
        ]
      : sortTypes.value[0]
  )

  const getActiveOrdering = computed(() => activeOrdering.value)
  const updateOrdering = (value) => (activeOrdering.value = value)

  return {
    sortTypes,
    getActiveOrdering,
    updateOrdering,
  }
}
