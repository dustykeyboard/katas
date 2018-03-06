function defaultCmp(a, b) {
  if (a === b) return 0
  if (a > b) return 1
  return 0
}

const bubbleSort = function bubbleSort(list, cmp = defaultCmp) {
  let swap, lastSwap
  let unsorted = list.length - 1
  while (unsorted) {
    lastSwap = 0
    for (var i = 0; i < unsorted; i++) {
      if (cmp(list[i], list[i + 1]) > 0) {
        lastSwap = i
        swap = list[i]
        list[i] = list[i + 1]
        list[i + 1] = swap
      }
    }
    unsorted = lastSwap
  }
  return list
}

var exports = (module.exports = bubbleSort)
