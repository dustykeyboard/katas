const Test = require('./test')
const isPrime = require('./is-prime')

const tests = [
  ['0 is Prime', isPrime(0), false],
  ['1 is Prime', isPrime(1), false],
  ['1 is Prime', isPrime(2), true],
  ['16 is Prime', isPrime(16), false],
  ['17 is Prime', isPrime(17), true],
  ['7919 is Prime', isPrime(7919), true],
]
const success = tests.reduce(
  (pass, test) => pass && Test.apply(this, test),
  true,
)
