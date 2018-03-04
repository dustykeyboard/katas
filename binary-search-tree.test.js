const Tree = require('./binary-search-tree')

const sampleInput = [0, 8, 2, 9, 5, 1, 12, 3, 4, 7, 6]
const expected = [0, 1, 2, 3, 4, 6, 7, 8, 9, 11, 12]

const tree = Tree()
tree.insert(...sampleInput)
tree.remove(5)
tree.insert(11)

const result = []
tree.inOrder(val => result.push(val))

if (expected.toString() == result.toString()) {
  console.log('PASS - Tree inserts, removes, and walks inOrder')
} else {
  console.log('FAIL - expected', expected, 'result', result)
}
