const Test = require('./test')
const fibonacci = require('./fibonacci')

const tests = [
  ['-1st fibonacci number is 1', fibonacci(-1), 1],
  ['0th fibonacci number is 1', fibonacci(0), 1],
  ['First fibonacci number is 1', fibonacci(1), 1],
  ['2nd fibonacci number is 1', fibonacci(2), 1],
  ['3rd fibonacci number is 2', fibonacci(3), 2],
  ['12th fibonacci number is 144', fibonacci(12), 144],
  ['20th fibonacci number is 6765', fibonacci(20), 6765],
]
tests.reduce((pass, test) => pass && Test.apply(this, test), true)
