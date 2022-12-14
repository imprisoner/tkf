export default function (path, options) {
  const { public: { apiBase: baseUrl } } = useRuntimeConfig()
 
  return useFetch(path, {
    baseUrl,
    ...options,
  })
}
