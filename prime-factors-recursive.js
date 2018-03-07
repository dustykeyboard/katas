function primeFactors(n, factor = 2) {
  if (n < factor) return []
  while (n % factor) factor++
  return [factor, ...primeFactors(n / factor)]
}

var exports = (module.exports = primeFactors)
