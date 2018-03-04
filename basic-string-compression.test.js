const basicStringCompression = require('./basic-string-compression')

const exampleInput = 'aabcccccaaa'
const exampleOutput = 'a2b1c5a3'

console.log('TEST -', exampleInput)
const actualOutput = basicStringCompression(exampleInput)
if (actualOutput === exampleOutput) {
  console.log('PASS -', actualOutput, 'matches', exampleOutput)
} else {
  console.log('FAIL - received', actualOutput, 'but expected', exampleOutput)
}

const exampleInput2 = 'abc'
const exampleOutput2 = 'abc'

console.log('TEST -', exampleInput2)
const actualOutput2 = basicStringCompression(exampleInput2)
if (actualOutput2 === exampleOutput2) {
  console.log('PASS -', actualOutput2, 'matches', exampleOutput2)
} else {
  console.log('FAIL - received', actualOutput2, 'but expected', exampleOutput2)
}
