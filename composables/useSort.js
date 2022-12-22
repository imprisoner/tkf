import useQueryString from '~/composables/useQueryString'

export default function () {
  const { getUrlSearchParams, setUrlSearchParams } = useQueryString()

  const sortTypes = [
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
  ]

  const getActiveOrdering = computed(
    () =>
      sortTypes[
        sortTypes.findIndex(
          (i) => i.value === getUrlSearchParams.value.ordering
        )
      ] || sortTypes[0]
  )
  const updateOrdering = ({ value }) => {
    setUrlSearchParams({ ordering: value })
  }

  return {
    sortTypes,
    getActiveOrdering,
    updateOrdering,
  }
}
