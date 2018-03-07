const Test = require('./test')
const reverseString = require('./reverse-string')

const tests = [
  ['Empty string returns empty', reverseString(''), ''],
  ['Single character string returns', reverseString('a'), 'a'],
  ['String returns reversed', reverseString('!dlrow ,olleH'), 'Hello, world!'],
]
tests.reduce((pass, test) => pass && Test.apply(this, test), true)
