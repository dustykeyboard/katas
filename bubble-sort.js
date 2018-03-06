const defaultCmp = (a, b) => a - b

const bubbleSort = function bubbleSort(list, cmp = defaultCmp) {
  let lastswap = 0
  let unsorted = list.length - 1
  while (unsorted) {
    for (var i = 0; i < unsorted; i++) {
      if (cmp(list[i], list[i + 1]) > 0) {
        lastswap = i
        swap = list[i]
        list[i] = list[i + 1]
        list[i + 1] = swap
      }
    }
    unsorted = lastswap
  }
  return list
}

var exports = (module.exports = bubbleSort)
