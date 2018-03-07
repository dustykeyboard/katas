function fibonacci(n) {
  let fib = 1
  for (var i = 2, prev = 1; i < n; i++) {
    fib += prev
    prev = fib - prev
  }
  return fib
}

var exports = (module.exports = fibonacci)
