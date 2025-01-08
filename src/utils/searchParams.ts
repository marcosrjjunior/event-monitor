export const updateSearchParams = (url: string, params) => {
  const urlObj = new URL(url, window.location.origin)
  const searchParams = urlObj.searchParams

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) {
      searchParams.delete(key)
      continue
    }

    searchParams.set(key, value as string)
  }

  urlObj.search = searchParams.toString()

  return urlObj.toString()
}
