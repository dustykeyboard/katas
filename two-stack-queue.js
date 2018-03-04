const Queue = function Queue() {
  const input = []
  const output = []

  function add(...items) {
    input.push(...items)
  }

  function next() {
    if (!output.length) {
      while (input.length) {
        output.push(input.pop())
      }
    }
    return output.pop()
  }

  function state() {
    return {
      input,
      output,
    }
  }

  return {
    add,
    next,
    state,
  }
}

var exports = module.exports = Queue
