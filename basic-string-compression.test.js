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
