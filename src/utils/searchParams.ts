export const updateSearchParams = (
  pathname: string,
  currentSearchParams: URLSearchParams,
  params: Record<string, string | undefined>,
): string => {
  const searchParams = new URLSearchParams(currentSearchParams.toString())

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) {
      searchParams.delete(key)
      continue
    }

    searchParams.set(key, value)
  }

  return `${pathname}?${searchParams.toString()}`
}
