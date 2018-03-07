function primeFactors(n) {
  let factors = []
  let factor = 2

  while (factor <= n) {
    if (n % factor) {
      factor++
      continue
    }

    factors.push(factor)
    n /= factor
  }
  return factors
}

var exports = (module.exports = primeFactors)
