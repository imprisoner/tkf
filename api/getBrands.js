import useApi from '@/composables/useApi'

export function getBrands({ isShowOnMain, brandType } = {}, inComponent) {
  return useApi(
    '/lots/brands/',
    {
      query: {
        is_show_on_main: isShowOnMain,
        brand_type: brandType,
      },
    },
    inComponent
  ).then((res) => {
    if (res.data) {
      return res.data
    }

    return res
  })
}
