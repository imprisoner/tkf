export default function (path, options) {
  const baseURL = 'http://185.20.226.229/api/v1'
  return useFetch(path, {
    baseURL,
    ...options
  })
}