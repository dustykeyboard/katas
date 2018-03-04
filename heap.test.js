const Heap = require('./heap')

const heap = new Heap()
const expected = [0, 2, 9, 36, 38, 41, 68, 72, 96]

const input = [38, 96, 68, 0, 2, 41, 9, 36, 72]
heap.push(...input)

let result = []

while (!heap.empty()) {
  result.push(heap.pop())
}

if (result.toString() === expected.toString()) {
  console.log('PASS - heap pop values in sorted order')
} else {
  console.log('FAIL - expected', expected, 'but received', result)
}
