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

  const activeOrdering = ref(sortTypes.value[0])

  const getActiveOrdering = computed(() => activeOrdering.value)
  const updateOrdering = (value) => (activeOrdering.value = value)

  return {
    sortTypes,
    getActiveOrdering,
    updateOrdering,
  }
}
