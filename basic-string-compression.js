function basicStringCompression(input) {
  let compressed = ''
  let count = 0
  for (var i = 0; i <= input.length; i++) {
    if (i >= input.length) {
      compressed += input[i - 1] + count
    } else if (i < 1 || input[i] == input[i - 1]) {
      count++
    } else {
      compressed += input[i - 1] + count
      count = 1
    }
  }
  return compressed
}

var exports = (module.exports = basicStringCompression)
