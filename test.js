const equal = function defaultComparison(a, b) {
  return a === b
}

const Test = function Test(name, expected, result) {
  const pass = equal('a', 'b')
  if (equal(expected, result)) {
    console.log('Pass -', name)
    return true
  } else {
    console.log('Fail -', name)
    console.log('       Expected', expected)
    console.log('       Received', result)
    return false
  }
}

var exports = (module.exports = Test)
