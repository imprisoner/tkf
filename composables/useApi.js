export default function (path, options) {
  const { public: { apiBase: baseUrl } } = useRuntimeConfig()
 
  // baseUrl не работает
  return useFetch(`${baseUrl}${path}`, {
    ...options,
  })
}
