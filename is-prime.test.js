const Test = require('./test')
const isPrime = require('./is-prime')

const tests = [
  Test('0 is Prime', isPrime(0), false),
  Test('1 is Prime', isPrime(1), false),
  Test('1 is Prime', isPrime(2), true),
  Test('16 is Prime', isPrime(16), false),
  Test('17 is Prime', isPrime(17), true),
  Test('7919 is Prime', isPrime(7919), true),
]
