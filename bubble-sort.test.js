const Test = require('./test')
const bubbleSort = require('./bubble-sort')

function stringCmp(a, b) {
  if (a === b) return 0
  if (a > b) return 1
  return -1
}

const tests = [
  ['Returns empty array', bubbleSort([]), []],
  ['Sorts array of 3 numbers', bubbleSort([2, 3, 1]), [1, 2, 3]],
  [
    'Sorts array of 10 numbers',
    bubbleSort([62, 85, 43, 48, 71, 53, 79, 39, 32, 2]),
    [2, 32, 39, 43, 48, 53, 62, 71, 79, 85],
  ],
  [
    'Sorts array of words with custom comparison function',
    bubbleSort(['hello', 'again', 'world'], stringCmp),
    ['again', 'hello', 'world'],
  ],
]
const success = tests.reduce(
  (pass, test) => pass && Test.apply(this, test),
  true,
)
