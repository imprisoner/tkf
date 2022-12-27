import useApi from '@/composables/useApi'

export function getContacts() {
  return useApi('/pages/contact/').then((res) => {
    return res.data
  })
}
