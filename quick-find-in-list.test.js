const Test = require('./test')
const quickFindInList = require('./quick-find-in-list')

const tests = [
  ['Empty list', quickFindInList([], 1), false],
  ['Single item in list', quickFindInList([1], 1), true],
  ['Single item not in list', quickFindInList([1], 2), false],
  ['Item in list', quickFindInList([1, 2, 3, 4, 20], 4), true],
  ['Item not in list', quickFindInList([1, 2, 3, 4, 20], 5), false],
  ['Item greater than list', quickFindInList([1, 2, 3, 4, 20], 50), false],
  ['Item less than list', quickFindInList([1, 2, 3, 4, 20], 0), false],
]
tests.reduce((pass, test) => pass && Test.apply(this, test), true)
