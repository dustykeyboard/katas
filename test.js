const equal = function defaultComparison(a, b) {
  return a.toString() === b.toString()
}

const colors = {
  Reset: '\x1b[0m',
  Red: '\x1b[31m',
  Green: '\x1b[32m',
}

const Test = function Test(name, result, expected) {
  const pass = equal('a', 'b')
  if (equal(expected, result)) {
    console.log(`${colors.Green}Pass${colors.Reset} -`, name)
    return true
  } else {
    console.log(`${colors.Red}Fail${colors.Reset} -`, name)
    console.log('       Expected', expected)
    console.log('       Received', result)
    return false
  }
}

var exports = (module.exports = Test)
