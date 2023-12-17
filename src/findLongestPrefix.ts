export function findLongestPrefix(strs: string[]): string {
  // no need to check, follow by Constraints: * 1 <= strs.length <= 200
  // if (strs.length === 0) {
  //   return ""
  // }

  let low = 0
  let high = Math.min(...strs.map((str) => str.length))

  if (high === 0) {
    // follow by Constraints: * 0 <= strs[i].length <= 200
    return ""
  }

  while (low <= high) {
    const mid = Math.floor((low + high) / 2)

    if (isPrefix(strs, mid)) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }

  return strs[0].substring(0, (low + high) / 2)
}

function isPrefix(strs: string[], len: number): boolean {
  const prefix = strs[0].substring(0, len)

  return strs.every((str) => str.startsWith(prefix))
}
