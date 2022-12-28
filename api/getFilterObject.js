import useApi from '@/composables/useApi'
export function getFilterObject(slug) {
  return useApi(`/lots/${slug}/filter-objects/`, {
    query: {},
  })
}

export function getPriceFilterAggregation(slug, params) {
  return useApi(`/lots/${slug}/aggregate-price/`, {
    query: {
      ...params,
    },
  }).then((res) => {
    if (res.data) {
      return res.data
    }

    return res
  })
}

export function getDiameterFilterAggregation(slug, params) {
  return useApi(`/lots/${slug}/aggregate-diameter/`, {
    query: {
      ...params,
    },
  }).then((res) => {
    if (res.data) {
      return res.data
    }

    return res
  })
}
