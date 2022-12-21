import useApi from '@/composables/useApi'

export function getContact() {
  return useApi('/pages/contact/').then(res => {
    return res.data
  })
}
