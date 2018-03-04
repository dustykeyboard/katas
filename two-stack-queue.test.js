const Queue = require('./two-stack-queue')

const tickets = Queue()
const expected = 3

tickets.add(1, 2, 3)
tickets.next()
tickets.add(4, 5, 6)
tickets.next()
const result = tickets.next()

if (expected === result) {
  console.log('PASS - tickets queued successfully')
} else {
  console.log('FAIL - expected', expected, 'received', result)
}
