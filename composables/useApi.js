export default function (path, options, inComponent = false) {
  const { public: { apiBase: baseUrl } } = useRuntimeConfig()

  if (inComponent) {
    return $fetch(`${baseUrl}${path}`, {
      ...options,
    }) 
  }
 
  // baseUrl не работает
  return useFetch(`${baseUrl}${path}`, {
    ...options,
  })
}
