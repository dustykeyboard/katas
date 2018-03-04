const getMaxProfit = require('./best-profit')

const input = [
  89,
  23,
  12,
  88,
  58,
  1,
  59,
  65,
  63,
  3,
  43,
  56,
  71,
  81,
  30,
  5,
  79,
  41,
  20,
  7,
]
const expected = 80
const result = getMaxProfit(input).profit

if (expected === result) {
  console.log('PASS - max profit calculated successfully')
} else {
  console.log('FAIL - expected', expected, 'received', result)
}
