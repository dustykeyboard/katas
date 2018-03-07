const Test = require('./test')
const primeFactors = require('./prime-factors')

const tests = [
  ['Prime Factors of 4', primeFactors(4), [2, 2]],
  ['Prime Factors of 10', primeFactors(10), [2, 5]],
  ['Prime Factors of 120', primeFactors(120), [2, 2, 2, 3, 5]],
  ['Prime Factors of 144', primeFactors(144), [2, 2, 2, 2, 3, 3]],
  ['Prime Factors of 97', primeFactors(97), [97]],
]
tests.reduce((pass, test) => pass && Test.apply(this, test), true)
