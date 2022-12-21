import useApi from '@/composables/useApi'

export function getDocuments() {
  return useApi('/pages/documents/', {
  }).then((res) => {
    return res.data
  })
}
