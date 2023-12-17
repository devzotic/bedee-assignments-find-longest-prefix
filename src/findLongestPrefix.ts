function findLongestPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return ""
  }

  let low = 0
  let high = Math.min(...strs.map((str) => str.length))

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    const prefix = strs[0].substring(0, mid)
    const isPrefix = strs.every((str) => str.startsWith(prefix))

    if (isPrefix) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return strs[0].substring(0, (low + high) / 2)
}

export default findLongestPrefix
