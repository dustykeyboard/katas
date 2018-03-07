const equal = function defaultComparison(a, b) {
  return a.toString() === b.toString()
}

const Test = function Test(name, result, expected) {
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
