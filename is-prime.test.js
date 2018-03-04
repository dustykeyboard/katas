const isPrime = require('./is-prime')

const input17 = 17
const expected17 = true
const result17 = isPrime(input17)

if (result17 === expected17) {
  console.log('PASS - isPrime(17) returned', result17)
} else {
  console.log('FAIL - expected', expected17, 'but received', result17)
}

const input16 = 16
const expected16 = false
const result16 = isPrime(input16)

if (result16 === expected16) {
  console.log('PASS - isPrime(16) returned', result16)
} else {
  console.log('FAIL - expected', expected16, 'but received', result16)
}

