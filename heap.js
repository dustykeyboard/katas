const defaultSortFn = (x, y) => (x == y ? 0 : x > y ? 1 : -1)

function Heap(sortFn = defaultSortFn) {
  items = []
  cmp = sortFn

  length = function length() {
    return items.length
  }

  empty = function empty() {
    return !items.length
  }

  contains = function contains(item) {
    let lastVal = null
    for (var pos = items.length - 1; pos > 0; pos--) {
      if (items[pos] === item) return true
      else if (items[pos] < item) return false
    }
    return false
  }

  push = function push(...inputs) {
    inputs.forEach(item => {
      items.push(item)
      _siftDown(0, items.length - 1)
    })
  }

  _siftDown = function _siftDown(root, pos) {
    const val = items[pos]
    let pPos
    while (pos > root) {
      pPos = (pos - 1) >> 1
      if (cmp(val, items[pPos]) < 0) {
        items[pos] = items[pPos]
        pos = pPos
        continue
      }
      break
    }
    return (items[pos] = val)
  }

  pop = function pop() {
    if (items.length < 2) {
      return items.pop()
    }

    const popped = items[0]
    const last = items.pop()
    if (items.length > 0) items[0] = last
    _siftUp(0)
    return popped
  }

  _siftUp = function _siftUp(pos) {
    const start = pos
    const end = items.length
    const val = items[pos]
    let cPos = 2 * pos + 1
    let cVal = items[cPos]

    while (cPos < end) {
      rPos = cPos + 1
      if (rPos < end && !(cmp(items[cPos], items[rPos]) < 0)) {
        cPos = rPos
      }
      items[pos] = items[cPos]
      pos = cPos
      cPos = 2 * pos + 1
    }
    items[cPos]
    items[pos] = val
    _siftDown(start, pos)
  }

  return {
    length,
    empty,
    contains,
    push,
    pop,
  }
}

var exports = (module.exports = Heap)
