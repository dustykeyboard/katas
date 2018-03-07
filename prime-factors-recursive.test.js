const Test = require('./test')
const primeFactorsRecursive = require('./prime-factors-recursive')

const tests = [
  ['Prime Factors of 4', primeFactorsRecursive(4), [2, 2]],
  ['Prime Factors of 10', primeFactorsRecursive(10), [2, 5]],
  ['Prime Factors of 120', primeFactorsRecursive(120), [2, 2, 2, 3, 5]],
  ['Prime Factors of 144', primeFactorsRecursive(144), [2, 2, 2, 2, 3, 3]],
]
tests.reduce((pass, test) => pass && Test.apply(this, test), true)
