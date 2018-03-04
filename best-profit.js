const getMaxProfit = prices => {
  if (prices.length < 2) throw new Error('Insufficient length')

  let buy_at = 0
  let buy_price = prices[buy_at]
  let sell_at = 1
  let sell_price = prices[sell_at]
  let low_at = buy_at
  let low_price = buy_price
  let testProfit = null
  let profit = sell_price - buy_price

  // Find best profit
  for (var i = 1; i < prices.length; i++) {
    testProfit = prices[i] - buy_price
    if (testProfit > profit) {
      profit = testProfit
      buy_at = low_at
      buy_price = low_price
      sell_at = i
      sell_price = prices[i]
    }
    if (prices[i] < low_price) {
      low_at = i
      low_price = prices[i]
    }
  }

  return {
    buy_at,
    buy_price,
    sell_at,
    sell_price,
    profit,
  }
}

var exports = module.exports = getMaxProfit
