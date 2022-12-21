import useApi from '@/composables/useApi'

export function getAdvantages() {
  return useApi('/pages/advantage/').then(res => {
    return res.data
  })
}
