function quickFindInList(list, n) {
  if (list.length < 1) return false
  if (list.length == 1) return list[0] == n

  let first = list[0],
    last = list[list.length - 1]
  if (n < first || n > last) return false

  let i = Math.floor(list.length * (n - first) / (last - first))
  while (list[i] < n) i++
  while (list[i] > n) i--

  return list[i] == n
}

var exports = (module.exports = quickFindInList)
