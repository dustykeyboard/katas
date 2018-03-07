function fibonacci(n) {
  let fib = 1
  let prev = 1

  for (var i = 2; i < n; i++) {
    fib = fib + prev
    prev = fib - prev
  }

  return fib
}

var exports = (module.exports = fibonacci)
