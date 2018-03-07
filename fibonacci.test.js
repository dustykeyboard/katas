const Test = require('./test')
const fibonacci = require('./fibonacci')

const tests = [
  ['First fibonacci number is 1', fibonacci(1), 1],
  ['2nd fibonacci number is 1', fibonacci(2), 1],
  ['3rd fibonacci number is 2', fibonacci(3), 2],
  ['12th fibonacci number is 144', fibonacci(12), 144],
  ['100th fibonacci number is 1', fibonacci(100), 354224848179262000000],
]
tests.reduce((pass, test) => pass && Test.apply(this, test), true)
